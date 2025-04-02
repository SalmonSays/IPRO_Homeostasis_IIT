import * as React from 'react';
import './PageTemplate.css';

export const Results: React.FC = () => {
  return (
    <div className="description-page">
      <header className="page-header">
        <h1>Project Results</h1>
        <h3>Experimental Results and Future Impact</h3>
      </header>
      
      <main className="content-section">
        <section className="results">
          <h2>Results and Validation</h2>
          <p>
            We tried our circuit in the lab. Our first question is: does our cholesterol sensor work? 
            To find out, we connected the sensor to a reporting gene (luciferase – an enzyme that glows). 
            When we added cholesterol in experiments, the sensor correctly turned down the glow, showing 
            it detected the elevated cholesterol. First attempt showed the sensitivity of the sensor; 
            however, it was off in high cholesterol and on in low – the opposite of what we eventually 
            want – but it indicated the sensitivity of the sensor. Further refining will turn on with 
            high cholesterol.
          </p>
          <p>
            The second question is if our shRNA can successfully inhibit the enzyme that produces 
            cholesterol (SQLE)? From the cell culture, the shRNA was able to downregulate the SQLE 
            gene, which led to decreased enzyme levels. This is a crucial step since it will guarantee 
            that our "responder" is indeed able to perform its role and suppress cholesterol synthesis 
            activity. Currently, we are evaluating the complete loop and integrating the sensor and 
            responder onto a single plasmid. Preliminary findings are promising; as we have essentially 
            shown that each part can work on its own, the responder can effectively prevent the 
            manufacture of cholesterol, and the sensor can receive the signal.
          </p>
        </section>

        <section className="conclusion">
          <h2>Conclusion & Impact</h2>
          <p>
            In conclusion, a prototype for an autonomous cholesterol circuit—a cell that controls its own 
            cholesterol on its own—is currently being built by the Homeostasis Project. This experimental 
            approach merges engineering and biology; rather than using medication that randomly block 
            cholesterol production, we give cells with an alternate path to regulate the process from within.
          </p>
          <p>
            Such a breakthrough is absolute. Imagine a future treatment where a patient's own liver cells 
            (or even their gut bacteria) are infused with a microscopic genetic circuit that is programmed 
            to manage cholesterol levels to a healthy point. It could make continuous adjustments, reducing 
            cholesterol only when it's excessively high – minus the side effects of chronic medication. 
            This diagnostic tool would augment or even replace daily pills, offering more control over 
            metabolic disease. Our treatment can also affect multiple steps in the cholesterol process 
            (rather than statins affecting one individual step), which can lead to better results for 
            those patients who are resistant to current medication.
          </p>
          <p>
            Looking at the broader context, we have demonstrated that synthetic biology can provide a 
            widespread solution to a common health problem. It's cholesterol today, but tomorrow the same 
            design-build approach could create circuits for other diseases – think blood glucose control 
            in diabetes, or neurotransmitter equilibrium in neurological disease. The thing is, our 
            research demonstrates that our proof-of-concept that a synthetic feedback loop in cells may 
            regulate homeostasis for a substance as significant to medicine as cholesterol. We're using 
            the engineering mantra of "building a better system" and applying it to medicine. With further 
            development and safety studies, this may lead to therapies that help millions of people more 
            effectively manage their cholesterol naturally.
          </p>
        </section>

        <section className="key-takeaway">
          <h2>Key Takeaway</h2>
          <p>
            Our synthetic circuit for cholesterol regulation shows how synthetic biology can create 
            self-regulating treatments. The Project's approach to this problem can lead to a more 
            personalized, on-demand treatment for high cholesterol, leading to non-reliance on drugs.
          </p>
        </section>
      </main>
    </div>
  );
};
