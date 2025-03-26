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
            Welcome to the Homeostasis Project. We're treating high cholesterol with synthetic biology, 
            setting up a regulator for the body's cholesterol levels. Although cholesterol is necessary 
            for life, too much of it can clog arteries and cause heart attacks and strokes. From the CDC, 
            about 86 million people in America suffer from elevated cholesterol. Although statins and other 
            modern medicines are helpful, they have drawbacks and aren't always effective. Our project's goal 
            is to create a genetic circuit that can recognize increased cholesterol levels and take action to 
            bring the levels back into balance. We'll explain how this artificial circuit works and why it 
            could completely transform cholesterol regulation in this one-minute synopsis.
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
      </main>
    </div>
  );
};
