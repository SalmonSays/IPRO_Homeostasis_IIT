import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ChatBox() {
  const [q, setQ] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const ask = async () => {
    if (!q.trim()) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q })
    }).then(r => r.json());
    setLog(l => [...l, `> ${q}`, res.answer]);
    setQ('');
  };

  return (
    <div style={{maxHeight: '240px', overflowY: 'auto', padding: '1rem', border:'1px solid #ccc'}}>
      {log.map((l,i)=><p key={i} style={{margin:0,whiteSpace:'pre-wrap'}}>{l}</p>)}
      <Form onSubmit={e=>{e.preventDefault(); ask();}}>
        <Form.Control value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about the PDF…" />
        <Button type="submit" className="mt-2">Ask</Button>
      </Form>
    </div>
  );
}
