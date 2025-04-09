import * as React from 'react';
import './PageTemplate.css';

export const Description: React.FC = () => {
  return (
    <div className="description-page">
      <header className="page-header">
        <h1>Project Description</h1>
        <h3>An innovative approach to cholesterol management using synthetic biology</h3>
      </header>
      
      <main className="content-section">
        <section className="introduction">
          <h2>Introduction</h2>
          <p>
            This project was initiated as a collaborative effort between the Biological Payload and
            Rocketry teams. Both teams aim to compete in prestigious competitions, including the
            Rocketry team’s biological payload launch in June 2025 and the Biological Payload team’s
            participation in the annual iGEM competition in October. The biological payload is scheduled
            for a preliminary launch at 10,000 feet, with future competitions targeting altitudes of
            100,000 and 200,000 feet
          </p>
        </section>

        <section className="problem">
          <h2>Problem</h2>
          <p>
            Cholesterol is a double-edged sword – our cells require it for membranes and hormones yet having 
            too much of it in the blood leads to plaque deposits in arteries. Atherosclerosis, or deposits, 
            obstructs blood flow and cause heart attacks and strokes. The problem is massive: heart disease 
            is the leading cause of death, and almost two out of five persons have high cholesterol. We do 
            have drugs that prevent the synthesis of cholesterol, such as statins. Although they have saved 
            lives, they are not without side effects; many people have liver problems, muscle soreness, or 
            even an increased chance of developing diabetes. Additionally, statins only target one enzyme out 
            of numerous steps in the cholesterol production pathway. We're taking a direct approach to the 
            issue, yet some components of cholesterol synthesis remain unregulated. A more accurate and dynamic 
            system of cholesterol regulation is required, one that can react to the body's needs in real time 
            and has fewer adverse consequences.
          </p>
        </section>

        <section className="methodology">
          <h2>Methodology (Our Synthetic Biology Solution)</h2>
          <p>
            Our solution is a model of continuative ingenuity in synthetic biology. We engineered a living 
            cell with a two-component genetic circuit that includes a Detector and a Responder. First, the 
            Detector: we built a cholesterol sensor by engineering a human DNA switch. More precisely, we 
            employed a natural regulatory element, called SRE, utilized by cells for detecting cholesterol. 
            We specifically, the SRE sequences into a promoter, functioning as a DNA "on/off" switch, thus 
            rendering it functional upon detection of elevated levels of cholesterol. When there is too much 
            cholesterol, our sensor gene is activated, in the same way a smoke detector detects smoke. Next, 
            the responder: after high cholesterol is detected, the circuit triggers an action to reduce cholesterol.
          </p>
          <p>
            Our system takes advantage of a gene that expresses a short RNA (shRNA) to knock down a critical 
            enzyme in the synthesis of cholesterol. Imagine removing a brake on cholesterol production. The 
            targeted enzyme, SQLE (squalene monooxygenase), is a chokepoint in cholesterol manufacturing and 
            silencing it leads to the decrease of cholesterol synthesis. We expressed this circuit in human 
            liver cells (HepG2) as the liver is the primary organ for cholesterol synthesis. In short, the 
            circuit works like a regulator: when there's too much cholesterol, the sensor is triggered and 
            the responder gene is turned on to dial down production; when cholesterol levels are normal, the 
            system is dormant. This feedback loop that regulates itself is at the core of our Homeostasis Project.
          </p>
        </section>
      </main>
    </div>
  );
};
