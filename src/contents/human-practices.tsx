import * as React from 'react';
import './PageTemplate.css';

export const HumanPractices: React.FC = () => {
  return (
    <div className="description-page">
      <header className="page-header">
        <h1>Human Practices</h1>
        <h3>Societal Impact and Ethical Considerations of Our Work</h3>
      </header>
      
      <main className="content-section">
        <section className="societal-impact">
          <h2>Societal Impact</h2>
          <p>
            Our Homeostasis Project addresses one of the most pressing public health challenges of our time. 
            With approximately 86 million Americans affected by high cholesterol and heart disease being the 
            leading cause of death globally, our work has the potential to transform how we approach cholesterol 
            management. The societal impact extends beyond just medical treatment - it touches on healthcare 
            accessibility, quality of life, and economic implications for both individuals and healthcare systems.
          </p>
        </section>

        <section className="healthcare-accessibility">
          <h2>Healthcare Accessibility</h2>
          <p>
            Current cholesterol management options, primarily statins, while effective, come with significant 
            barriers to access. These include high costs, required regular medical monitoring, and potential 
            side effects that may discourage consistent use. Our synthetic biology approach aims to provide 
            a more accessible solution that could potentially reduce the need for lifetime medication 
            dependence and frequent medical interventions. This could particularly benefit underserved 
            communities where access to regular healthcare monitoring might be limited.
          </p>
        </section>

        <section className="ethical-considerations">
          <h2>Ethical Considerations</h2>
          <p>
            We recognize that working with genetic circuits and synthetic biology raises important ethical 
            questions. Our approach carefully considers safety at multiple levels: the genetic circuit's 
            containment, the specificity of its action, and the reversibility of its effects. We've 
            designed our system with built-in safeguards, ensuring it only activates in response to 
            elevated cholesterol levels and deactivates when levels normalize. This self-regulating 
            feature minimizes risks of over-intervention and unintended consequences.
          </p>
        </section>

        <section className="economic-impact">
          <h2>Economic Impact</h2>
          <p>
            The economic burden of cardiovascular diseases, largely influenced by cholesterol-related 
            conditions, is substantial. In the United States alone, the annual cost of treating heart 
            disease exceeds $200 billion. Our project's potential to provide a more efficient and 
            targeted approach to cholesterol management could significantly reduce these costs. 
            Additionally, by potentially reducing the incidence of heart attacks and strokes, our 
            solution could lead to decreased emergency medical interventions and long-term care needs.
          </p>
        </section>

        <section className="future-implications">
          <h2>Future Implications</h2>
          <p>
            Our project represents more than just a new treatment approach - it demonstrates the potential 
            of synthetic biology to create intelligent, responsive therapeutic systems. This could pave 
            the way for similar approaches to other chronic conditions where continuous regulation is 
            needed. The success of this project could influence how we think about disease management, 
            moving from reactive treatments to proactive, self-regulating biological solutions.
          </p>
        </section>
        {/*
        <section className="stakeholder-engagement">
          <h2>Stakeholder Engagement</h2>
          <p>
            Throughout our project development, we've engaged with various stakeholders including medical 
            professionals, bioethicists, and patient advocacy groups. Their insights have helped shape 
            our approach to ensure it addresses real-world needs while maintaining ethical standards. 
            We've particularly focused on understanding patient perspectives regarding genetic 
            interventions and their concerns about safety and long-term effects.
          </p>
        </section>
        */}
      </main>
    </div>
  );
};
