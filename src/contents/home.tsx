import * as React from 'react';
import './home.css';  // Make sure to create this file
import ChatBox from '../components/ChatBox';

interface StatItem {
  number: string;
  text: string;
  icon: string;
}

interface TestimonialItem {
  text: string;
  name: string;
  avatar: string;
}

interface ChallengeItem {
  text: string;
  value: string;
  icon: string;
}

export const Home: React.FC = () => {
  const [animateStats, setAnimateStats] = React.useState(false);
  const [animateChallenges, setAnimateChallenges] = React.useState(false);
  const [animateNewEra, setAnimateNewEra] = React.useState(false);
  const [animateSolution, setAnimateSolution] = React.useState(false);
  
  const stats: StatItem[] = [
    { 
      number: "94M", 
      text: "U.S. Adults with High Cholesterol",
      icon: "/icons/heart-health.svg"
    },
    { 
      number: "NO SYMPTOMS", 
      text: "Until Serious Complications",
      icon: "/icons/health-graph.svg"
    },
    { 
      number: "#1", 
      text: "Cause of Heart Disease",
      icon: "/icons/heart-pulse.svg"
    }
  ];

  const challenges: ChallengeItem[] = [
    { 
      text: "Don't Reach Target Levels", 
      value: "55%",
      icon: "/icons/target-levels.svg"
    },
    { 
      text: "Muscle Pain, Liver Issues", 
      value: "Side Effects",
      icon: "/icons/side-effects.svg"
    },
    { 
      text: "Poor Response to Treatment", 
      value: "Resistance",
      icon: "/icons/resistance.svg"
    }
  ];

  const testimonials: TestimonialItem[] = [
    {
      text: "After years of struggling with statin side effects, this new approach gives me hope.",
      name: "John D., Patient",
      avatar: "/icons/patient-avatar.svg"
    },
    {
      text: "Traditional treatments weren't enough. We need innovative solutions like this.",
      name: "Dr. Sarah M., Cardiologist",
      avatar: "/icons/doctor-avatar.svg"
    },
    {
      text: "Finally, a promising alternative for patients who don't respond to conventional therapy.",
      name: "Lisa R., Research Partner",
      avatar: "/icons/researcher-avatar.svg"
    }
  ];

  React.useEffect(() => {
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
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const animation = entry.target.getAttribute('data-animation');
          if (animation) {
            entry.target.classList.add('animate__animated', animation);
          }
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element as Element);
    });

    // New Era section scroll observer
    const newEraObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimateNewEra(true);
            newEraObserver.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.2 } // Start animation when 20% of the section is visible
    );

    const newEraSection = document.querySelector('.new-era-section');
    if (newEraSection) {
      newEraObserver.observe(newEraSection);
    }

    // Add solution section observer
    const solutionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimateSolution(true);
            solutionObserver.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const solutionSection = document.querySelector('.solution-section');
    if (solutionSection) {
      solutionObserver.observe(solutionSection);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
      newEraObserver.disconnect();
      solutionObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header Section with Logo */}
      <div className="row mt-4 mb-5">
        <div className="col text-center">
          <img 
            src="/images/homeostasis-logo.png" 
            alt="Homeostasis Logo" 
            className="img-fluid heartbeat-animation" 
            style={{ maxWidth: '300px' }}
          />
          <h1 className="display-4 mt-4">Revolutionizing Cholesterol Management</h1>
          <p className="lead">Using synthetic biology to transform cardiovascular health</p>
        </div>
      </div>

      {/* Chat Box Section */}
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-10 col-lg-8">
          <ChatBox />
        </div>
      </div>

      {/* Key Statistics Section */}
      <div className="row mt-4">
        <div className="col">
          <div className="impact-section p-4">
            <div className="row">
              {stats.map((stat, index) => (
                <div key={index} className="col-md-4">
                  <div className={`key-stat-card ${animateStats ? 'balloon-animation' : ''}`}>
                    <img src={stat.icon} alt={stat.text} className="mb-3" style={{ width: '64px' }} />
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
            <h2 className="text-center mb-4">Treatment Challenges</h2>
            <div className="challenge-timeline">
              <div className="row">
                {challenges.map((challenge, index) => (
                  <div key={index} className="col-md-4">
                    <div className={`challenge-item text-center ${animateChallenges ? 'balloon-animation' : ''}`}>
                      <img 
                        src={challenge.icon} 
                        alt={challenge.text}
                        className="mb-3"
                        style={{ width: '64px', height: '64px' }}
                      />
                      <span className="highlight-text d-block mb-2">{challenge.value}</span>
                      <p className="challenge-description">{challenge.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section: Problem Meets Possibility */}
      <div className="row mt-4">
        <div className="col text-center py-5" style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', 
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

      {/* Our Innovative Solution Section */}
      <div className="row mt-5 mb-5">
        <div className="col">
          <div className={`solution-section p-5 ${animateSolution ? 'animate__animated animate__fadeIn' : ''}`}>
            <h2 className="text-center mb-4">Our Innovative Solution</h2>
            <div className="row align-items-stretch">
              <div className="col-md-6">
                <div className={`solution-card ${animateSolution ? 'slide-in-left' : ''}`}>
                  <div className="solution-icon mb-4">
                    <i className="fas fa-dna pulse-animation"></i>
                  </div>
                  <h3>Synthetic Biology Approach</h3>
                  <p className="mb-4">
                    We're building a self-regulating genetic circuit that works like a smart thermostat 
                    for cholesterol. When levels get too high, it automatically triggers a response to 
                    bring them back down.
                  </p>
                  <div className="solution-features">
                    <h4 className="text-primary mb-3">Key Features</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Real-time cholesterol monitoring
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Self-regulating feedback loop
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Minimal side effects
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Personalized response system
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`solution-steps ${animateSolution ? 'fade-in-up' : ''}`}>
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Detect</h4>
                      <p>Smart sensor recognizes high cholesterol levels through advanced molecular detection systems</p>
                      <ul className="step-details">
                        <li>Continuous monitoring of blood cholesterol</li>
                        <li>Precise measurement of LDL and HDL levels</li>
                        <li>Early warning system for potential risks</li>
                      </ul>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Respond</h4>
                      <p>Triggers natural regulation mechanism through engineered genetic circuits</p>
                      <ul className="step-details">
                        <li>Activation of cholesterol-lowering pathways</li>
                        <li>Enhanced natural metabolic processes</li>
                        <li>Targeted cellular response system</li>
                      </ul>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Balance</h4>
                      <p>Maintains healthy cholesterol levels through continuous feedback regulation</p>
                      <ul className="step-details">
                        <li>Dynamic adjustment of metabolic activity</li>
                        <li>Long-term stability maintenance</li>
                        <li>Prevention of cholesterol fluctuations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="solution-benefits p-4 rounded">
                  <h4 className="text-center mb-3">Why Our Solution Matters</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="benefit-item text-center">
                        <i className="fas fa-heartbeat text-danger mb-2"></i>
                        <h5>Improved Health Outcomes</h5>
                        <p>More effective cholesterol management leading to better cardiovascular health</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="benefit-item text-center">
                        <i className="fas fa-user-md text-primary mb-2"></i>
                        <h5>Personalized Treatment</h5>
                        <p>Adapts to individual patient needs and response patterns</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="benefit-item text-center">
                        <i className="fas fa-chart-line text-success mb-2"></i>
                        <h5>Long-term Sustainability</h5>
                        <p>Continuous monitoring and adjustment for lasting results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Era in Cholesterol Management Section */}
      <div className="row mt-5">
        <div className="col">
          <div className="new-era-section">
            <h2 className={`text-center new-era-title display-5 ${animateNewEra ? 'slide-from-left' : ''}`}>
              A New Era in Cholesterol Management
            </h2>
            <p className={`lead text-center mb-5 ${animateNewEra ? 'slide-from-right' : ''}`}>
              Leveraging the power of synthetic biology, we're developing innovative pathways 
              to effectively lower cholesterol where traditional medications fall short.
            </p>
            <div className="row align-items-stretch">
              <div className="col-md-6 mb-4">
                <div className={`approach-card traditional ${animateNewEra ? 'slide-from-bottom' : ''}`}>
                  <div className="text-center">
                    <img 
                      src="/icons/pills.svg"
                      alt="Traditional Treatment"
                      className="approach-icon"
                    />
                  </div>
                  <h4 className="approach-title text-center">Traditional Treatment</h4>
                  <ul className="approach-list">
                    <li>Statins block cholesterol production</li>
                    <li>One-size-fits-all approach</li>
                    <li>Common side effects like muscle pain</li>
                    <li>Limited effectiveness for some patients</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={`approach-card innovative ${animateNewEra ? 'slide-from-bottom delay-1' : ''}`}>
                  <div className="text-center">
                    <img 
                      src="/icons/dna.svg"
                      alt="Our Approach"
                      className="approach-icon"
                    />
                  </div>
                  <h4 className="approach-title text-center">Our Innovative Approach</h4>
                  <ul className="approach-list">
                    <li>Synthetic biology enhances natural processes</li>
                    <li>Personalized treatment potential</li>
                    <li>Designed for minimal side effects</li>
                    <li>Targeted approach for better outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real People, Real Impact Section */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center display-5">Real People, Real Impact</h2>
          <hr />
          <div className="row mt-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="testimonial-box p-4 text-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="mb-3"
                    style={{ width: '64px' }}
                  />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Follow Our Journey Section */}
      <div className="row mt-5 mb-5">
        <div className="col text-center">
          <h2 className="display-5">Follow Our Journey</h2>
          <hr />
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-primary btn-lg">
              Sign Up for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
