import { Inspirations, InspirationLink } from "../components";
import { useEffect, useState } from "react";

export function Home() {
  const [animateStats, setAnimateStats] = useState(false);
  const [animateChallenges, setAnimateChallenges] = useState(false);
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "" },
    { year: 2022, teamName: "Virginia", pageName: "" },
    { year: 2022, teamName: "Crete", pageName: "" },
  ];

  useEffect(() => {
    // Start animations with a delay between sections
    setAnimateStats(true);
    setTimeout(() => setAnimateChallenges(true), 1000); // Start second section 1s after first

    // Reset animations every 5 seconds
    const interval = setInterval(() => {
      // Reset first section
      setAnimateStats(false);
      setTimeout(() => setAnimateStats(true), 50);

      // Reset second section 1s after first
      setTimeout(() => {
        setAnimateChallenges(false);
        setTimeout(() => setAnimateChallenges(true), 50);
      }, 1000);
    }, 5000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', entry.target.dataset.animation);
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      clearInterval(interval);
      console.log("Cleanup performed"); // Debug log
      observer.disconnect();
    };
  }, []);

  // Debug render
  console.log("Current animateStats state:", animateStats);
  console.log("Current animateChallenges state:", animateChallenges);

  return (
    <div className="home-container">
      {/* Key Statistics Section */}
      <div className="row mt-4">
        <div className="col">
          <div className="impact-section p-4">
            <div className="row">
              {[
                { number: "94M", text: "U.S. Adults with High Cholesterol" },
                { number: "NO SYMPTOMS", text: "Until Serious Complications" },
                { number: "#1", text: "Cause of Heart Disease" }
              ].map((stat, index) => (
                <div key={index} className="col-md-4">
                  <div className={`key-stat-card ${animateStats ? 'balloon-animation' : ''}`}>
                    <span className="highlight-number">{stat.number}</span>
                    <p>{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Challenges */}
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <div className="treatment-challenges p-4" style={{ maxWidth: '800px' }}>
            <div className="challenge-timeline">
              {[
                { text: "Don't Reach Target Levels", value: "55%" },
                { text: "Muscle Pain, Liver Issues", value: "Side Effects" },
                { text: "Poor Response to Treatment", value: "Resistance" }
              ].map((challenge, index) => (
                <div key={index} className={`challenge-item text-center ${animateChallenges ? 'balloon-animation' : ''}`}>
                  <span className="highlight-text">{challenge.value}</span>
                  <p>{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section: Problem Meets Possibility */}
      <div className="row mt-4">
        <div className="col text-center py-5" style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          borderRadius: '8px'
        }}>
          <h1 className="display-4 fw-bold mb-4">55% of Patients Are Still at Risk. We're Changing That.</h1>
          <p className="lead fs-4 mb-5">
            Millions of patients struggle to achieve safe cholesterol levels despite existing treatments. 
            We're pioneering a synthetic biology solution to bridge this critical healthcare gap.
          </p>
          <button className="btn btn-primary btn-lg px-4 me-3">Discover How</button>
          <button className="btn btn-outline-light btn-lg px-4">Join the Mission</button>
        </div>
      </div>

      {/* The Problem at a Glance */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center mb-4">The Unmet Need</h2>
          <hr />
          <div className="row mt-4">
            <div className="col-md-4 text-center mb-4">
              <div className="display-1 text-danger fw-bold">55%</div>
              <p className="lead">of patients don't achieve therapeutic cholesterol thresholds</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="display-1 text-danger fw-bold">#1</div>
              <p className="lead">Heart disease remains the leading cause of death globally</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="display-1 text-danger fw-bold">17.9M</div>
              <p className="lead">people die each year from cardiovascular diseases</p>
            </div>
          </div>
          <p className="text-center fs-5 mt-3">
            Behind every number is a life at risk. Our solution brings hope to millions.
          </p>
        </div>
      </div>

      {/* New Solution Section */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center display-5">A New Era in Cholesterol Management</h2>
          <hr />
          <p className="lead text-center mb-5">
            Leveraging the power of synthetic biology, we're developing innovative pathways 
            to effectively lower cholesterol where traditional medications fall short.
          </p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4>Traditional Treatment</h4>
              <div className="treatment-box traditional p-4 mb-4">
                <ul>
                  <li>Statins block cholesterol production</li>
                  <li>One-size-fits-all approach</li>
                  <li>Side effects common</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Our Approach</h4>
              <div className="treatment-box innovative p-4 mb-4">
                <ul>
                  <li>Synthetic biology enhances natural processes</li>
                  <li>Personalized treatment potential</li>
                  <li>Designed for minimal side effects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human Impact Section */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center display-5">Real People, Real Impact</h2>
          <hr />
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="testimonial-box p-4">
                <p className="testimonial-text">
                  "After years of struggling with statin side effects, 
                  this new approach gives me hope."
                </p>
                <p className="testimonial-name">- John D., Patient</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box p-4">
                <p className="testimonial-text">
                  "Traditional treatments weren't enough. We need 
                  innovative solutions like this."
                </p>
                <p className="testimonial-name">- Dr. Sarah M., Cardiologist</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box p-4">
                <p className="testimonial-text">
                  "Finally, a promising alternative for patients who 
                  don't respond to conventional therapy."
                </p>
                <p className="testimonial-name">- Lisa R., Research Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="row mt-5">
        <div className="col text-center">
          <h2 className="display-5">Follow Our Journey</h2>
          <hr />
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-primary btn-lg">
              Sign Up for Updates
            </button>
            <button className="btn btn-outline-light btn-lg">
              Read Our Research
            </button>
            <button className="btn btn-outline-light btn-lg">
              Collaborate With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
