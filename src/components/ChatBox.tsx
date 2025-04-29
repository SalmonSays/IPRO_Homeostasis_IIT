import React, { useState } from "react";

interface ChatResponse {
  answer: string;
}

/**
 * ChatBox component: a simple Q&A widget connected to /api/chat.
 * - Sends a POST { question } to /api/chat
 * - Renders the server's answer immediately under the input
 * - Handles loading & error states
 */
export default function ChatBox() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const ask = async () => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data: ChatResponse = await res.json();
      setAnswer(data.answer);
      setQuestion("");
    } catch (e) {
      console.error(e);
      setError("Could not retrieve answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question…"
          style={{ flex: 1, padding: "0.5rem" }}
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter") ask();
          }}
        />
        <button onClick={ask} disabled={loading} style={{ padding: "0.5rem 1rem" }}>
          {loading ? "Loading…" : "Ask"}
        </button>
      </div>

      {error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
      )}

      {answer && !error && (
        <div style={{ marginTop: "1rem", fontWeight: 500 }}>
          <span style={{ color: "#0d6efd" }}>Answer:</span> {answer}
        </div>
      )}
    </div>
  );
}
