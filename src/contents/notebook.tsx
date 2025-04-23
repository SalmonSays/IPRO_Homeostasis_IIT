import React from 'react';
import './notebook.css';

interface NotebookProps {}

export const Notebook: React.FC<NotebookProps> = () => {
  return (
    <div className="notebook-page">
      <header className="page-header">
        <h1>Lab Notebook</h1>
        <h3>Detailed documentation of our experimental journey</h3>
      </header>
      
      <main className="content-section">
        <section className="week-section">
          <h2>Week 1</h2>
          
          <div className="section-content">
            <h3>Cell Maintenance</h3>
            <ul>
              <li>Katana, Raphael, and Miriam have learned cell maintenance basics and splitting</li>
              <li>HepG2 wt and HepG2 V2 non-clonal cells were restarted on 1/31</li>
              <li>Imaging has taken place ~3x per day</li>
              <li>Media has been changed</li>
              <li>HepG2 V2 non-clonal cells split on 2/3 (1:8)</li>
            </ul>
            
            <div className="image-gallery">
              <h4>Cell Images</h4>
              <div className="image-row">
                <img src="images\Week1_Cell Image1.png" alt="Week 1 Cell Image 1" />
                <img src="images\Week1_Cell Image2.png" alt="Week 1 Cell Image 2" />
                <img src="images\Week1_Cell Image3.png" alt="Week 1 Cell Image 3" />
              </div>
            </div>

            <h3>Dual Luciferase Assay</h3>
            <ul>
              <li>Luciferase is the reporter gene for if the promotor SRE is in the circuit. It comes in two forms: renilla and firefly</li>
              <li>Renilla acts as a control while firefly is the reporter</li>
              <li>If there's high activation in low glucose settings, there should be a lot firefly luciferase spotted in the luminometer as luminescence</li>
            </ul>

            <div className="image-gallery">
              <h4>Assay Results</h4>
              <div className="image-row">
                <img src="images\Week1_Table1.png" alt="Week 1 Table 1" />
                <img src="images\Week1_Table2.png" alt="Week 1 Table 2" />
                <img src="images\Week1_Table3.png" alt="Week 1 Table 3" />
                <img src="images\Week1_Table4.png" alt="Week 1 Table 4" />
              </div>
            </div>

            <h3>S23 Protocol v. ProMega Dual-Glo Luciferase Assay System Online Manual</h3>
            <ul>
              <li>Fail to note the ratio that should be added for Dual-Glo Luciferase Reagent</li>
              <li>Do not disclose what size well plate, etc was used</li>
              <li>Ex. 50 uL of Dual Glo Luc Reagent was used. It is recommended to use 75uL for 96 well plate</li>
              <li>Ratio Calculation more in detail online than in S23 protocol</li>
              <li>Temperature and Time sensitive use of Reagents</li>
            </ul>
          </div>
        </section>

        <section className="week-section">
          <h2>Week 2</h2>
          
          <div className="section-content">
            <h3>Growth Curve</h3>
            <h4>Control Group Updates</h4>
            <ul>
              <li>Current confluency doubling time: ~13 hrs</li>
            </ul>

            <h4>Cholesterol Group Updates</h4>
            <ul>
              <li>50 µM, 100 µM, 150 µM, and 200 µM concentrations tested</li>
            </ul>

            <div className="image-gallery">
              <h4>Growth Curve Images</h4>
              <div className="image-row">
                <img src="images\Week2_GrowthCurve1.png" alt="Week 2 Growth Curve 1" />
                <img src="images\Week2_GrowthCurve2.png" alt="Week 2 Growth Curve 2" />
                <img src="images\Week2_GrowthCurve3.png" alt="Week 2 Growth Curve 3" />
              </div>
            </div>

            <h4>Current Growth Curve</h4>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week2_GrowthCurve_Graph1.png" alt="Week 2 Growth Curve Graph 1" />
                <img src="images\Week2_GrowthCurve_Graph2.png" alt="Week 2 Growth Curve Graph 2" />
              </div>
            </div>

            <h4>Calculating Cell Doubling Time (hrs)</h4>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week2_GrowthCurve_Graph3.png" alt="Week 2 Growth Curve Graph 3" />
              </div>
            </div>

            <h3>Gel Electrophoresis</h3>
            <ul>
              <li>Ran two gels</li>
              <li>One well showed about 300 bp, the rest were empty</li>
              <li>Indicates that all the DNA has been degraded</li>
            </ul>

            <div className="image-gallery">
              <h4>Gel Images</h4>
              <div className="image-row">
                <img src="images\Week2_Gel1.png" alt="Week 2 Gel 1" />
                <img src="images\Week2_Gel2.png" alt="Week 2 Gel 2" />
              </div>
            </div>

            <h3>Plates</h3>
            <ul>
              <li>Set up agar plates with kanamycin seeded with GFP and RFP plasmids</li>
              <li>Set up agar plate with ampicillin and V2 plasmid</li>
              <li>Can do DNA extraction this week</li>
            </ul>

            <div className="image-gallery">
              <h4>Plate Images</h4>
              <div className="image-row">
                <img src="images\Week2_Plates1.png" alt="Week 2 Plate 1" />
                <img src="images\Week2_Plates2.png" alt="Week 2 Plate 2" />
                <img src="images\Week2_Plates3.png" alt="Week 2 Plate 3" />
              </div>
            </div>

            <h3>Dual Luciferase Assay Equipment</h3>
            <h4>Luminometer</h4>
            <ul>
              <li>Designed for low-to-medium throughput</li>
              <li>Measures single samples at a time</li>
              <li>Preprogrammed to inject reagents, read firefly and Renilla luciferase, and normalize results</li>
              <li>No reagent injectors required due to stable luciferase reaction kinetics</li>
              <li>Pros: Simple and efficient for small-scale assays</li>
              <li>Cons: Limited throughput (single tube at a time)</li>
            </ul>

            <h4>FLx800 Multimode Microplate Reader</h4>
            <ul>
              <li>Designed for multi-sample and high-throughput applications</li>
              <li>Processes 96-well plates, allowing simultaneous analysis of multiple samples</li>
              <li>Requires two reagent injectors for optimal DLR™ Assay performance</li>
              <li>Standard protocol:</li>
              <li>Cons:</li>
              <li>Requires careful calibration of reagent injectors</li>
              <li>More complex setup compared to single-tube luminometers</li>
            </ul>
          </div>
        </section>

        <section className="week-section">
          <h2>Week 3</h2>
          
          <div className="section-content">
            <h3>DNA Preparation for Transfection</h3>
            <ul>
              <li>Prepared LB broth to grow bacteria</li>
              <li>Set up overnight culture of GFP, V2, and RFP strains</li>
              <li>Harvested cells and put them in the freezer</li>
            </ul>

            <h3>Dual Luciferase Assay Replicate Calculation</h3>
            <ul>
              <li>Calculating sample size for two experimental groups</li>
              <li>Compared S23 Experimental Groups to each other:</li>
              <ul>
                <li>Standard/High Condition: 2 replicates</li>
                <li>Low Condition/High Condition: 6 replicates</li>
                <li>Low Condition/Standard Condition: 6.5 replicates</li>
              </ul>
              <li>6-7 Replicates per experimental group is recommended</li>
            </ul>

            <h3>Positive Control Test - DLA with Luminometer</h3>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week3_Control1.png" alt="Week 3 Control 1" />
              </div>
              <div className="image-row">
                <img src="images\Week3_Control_Table1.png" alt="Week 3 Control Table 1" />
                <img src="images\Week3_Control_Table2.png" alt="Week 3 Control Table 2" />
              </div>
            </div>
            <ul>
              <li>Took 3 readings</li>
              <li>Noticed each one was successively smaller</li>
              <li>Standard Deviation was applied to the graph (value too small for bars to show)</li>
            </ul>

            <h3>Positive Control Test - DLA with FLx800</h3>
            <ul>
              <li>
                Positive Test Control: <a href="images\glos3425.pdf" download>Download glos3425.pdf</a>
              </li>
              <li>
                Blank Test Control: <a href="images\blank.pdf" download>Download blank.pdf</a>
              </li>
            </ul>

            <h3>Growth Curves</h3>
            
            <h4>Control Growth Curve</h4>
            <ul>
              <li>2/14 - 3/5</li>
              <li>Reached max confluency of 57%</li>
              <li>Increased STDV w/ clumping (?)</li>
              <li>Doubling time: ~4.5 days</li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week3_ControlCell.png" alt="Week 3 Control Cell" />
              </div>
            </div>

            <h4>Cholesterol Growth Curves</h4>
            <ul>
              <li>50 uM and 100 uM → growing</li>
              <li>150 uM and 200 uM → no growth</li>
              <li>Doubling times:</li>
              <ul>
                <li>50 µM: ~4.69 days</li>
                <li>100 µM: ~41.67 days (?)</li>
                <li>150 µM: ~4.673 days</li>
                <li>200 µM: --</li>
              </ul>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week3_Cholestrol50.png" alt="Week 3 Cholesterol 50" />
                <img src="images\Week3_Cholestrol100.png" alt="Week 3 Cholesterol 100" />
              </div>
              <div className="image-row">
                <img src="images\Week3_Cholestrol150.png" alt="Week 3 Cholesterol 150" />
                <img src="images\Week3_Cholestrol200.png" alt="Week 3 Cholesterol 200" />
              </div>
            </div>

            <h4>Control Data</h4>
            <ul>
              <li>
                <a href="images\Cell Growth Unlimited.pdf" download>Download Cell Growth Unlimited.pdf</a>
              </li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week3_ControlGraph1.png" alt="Week 3 Control Graph 1" />
                <img src="images\Week3_ControlGraph2.png" alt="Week 3 Control Graph 2" />
              </div>
            </div>
          </div>
        </section>

        <section className="week-section">
          <h2>Week 4</h2>
          
          <div className="section-content">
            <h3>Transfection</h3>
            <h4>DNA Preparation</h4>
            <ul>
              <li>GFP ~30µl · 0.40µg/µl</li>
              <li>GFP ~30µl · 0.17µg/µl</li>
              <li>V2 ~30µl · 0.17µg/µl</li>
            </ul>

            <h4>Well Plate Setup</h4>
            <ul>
              <li>Well Plate Setup for trial transfection</li>
              <li>Planning for pilot transfection – 9000ng</li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week4_Transfection.png" alt="Week 4 Transfection" />
              </div>
            </div>

            <h3>Dual Luciferase Assay</h3>
            <ul>
              <li>Purchasing dual luciferase assay</li>
              <li>Weren't able to determine sensitivity difference between FLx800 plate reader and the luminometer</li>
              <ul>
                <li>Technical error</li>
                <li>Human mistake</li>
              </ul>
            </ul>

            <h3>Growth Curve Updates</h3>
            
            <h4>Trial 1</h4>
            <ul>
              <li>50 µM still active →</li>
              <ul>
                <li>Confluence as of 3/9: 35.59</li>
                <li>Current doubling time: 6.92604 days</li>
              </ul>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week4_GrowthCurveUpdate.png" alt="Week 4 Growth Curve Update" />
              </div>
            </div>

            <h4>Trial 2</h4>
            <ul>
              <li>Control, 30, 50, 70, 80, 100 (µM)</li>
              <li>
                <a href="images\Cell Growth Unlimited.xlsx" download>Download Cell Growth Unlimited.xlsx</a>
              </li>
            </ul>

            <h4>Next Goal</h4>
            <ul>
              <li>BCD w/ 'mirroring' concentrations; investigate G418 concentrations</li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week4_GrowthCurve.png" alt="Week 4 Growth Curve" />
              </div>
            </div>

            <h3>Kill Curve Draft</h3>
            <ul>
              <li>BCD acts as "neg" cholesterol</li>
              <ul>
                <li>Will results be mirrored?</li>
              </ul>
              <li>Additional concentrations</li>
              <li>Fit trend line</li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week4_KillCurveDraft.png" alt="Week 4 Kill Curve Draft" />
              </div>
            </div>
          </div>
        </section>

        <section className="week-section">
          <h2>Week 5</h2>
          
          <div className="section-content">
            <h3>Transfection Sub Team</h3>
            <h4>Results from Transfection Pilot</h4>
            <ul>
              <li>Photos of transfection</li>
              <li>Transfection percentage results</li>
            </ul>

            <h4>Analysis and Optimization</h4>
            <ul>
              <li>What went well and what didn't</li>
              <li>Lessons learned and optimization strategies</li>
              <li>Pros and Cons of current approach</li>
            </ul>

            <div className="image-gallery">
              <h4>Transfection Pilot Images</h4>
              <div className="image-row">
                <img src="images\Week5_Transfection1.png" alt="Week 5 Transfection 1" />
                <img src="images\Week5_Transfection2.png" alt="Week 5 Transfection 2" />
              </div>
              <div className="image-row">
                <img src="images\Week5_Transfection3.png" alt="Week 5 Transfection 3" />
                <img src="images\Week5_Transfection4.png" alt="Week 5 Transfection 4" />
              </div>
            </div>

            <h3>Dual Luciferase Assay Sub Team</h3>
            <h4>Sensitivity Analysis</h4>
            <ul>
              <li>FLx800 sensitivity results</li>
              <li>Luminometer sensitivity results</li>
            </ul>

            <h3>Growth Curve Sub Team</h3>
            <h4>BCD Growth Curve Analysis</h4>
            <ul>
              <li>Beta-cyclodextrin (BCD) - cyclic oligosaccharide</li>
              <ul>
                <li>Used for improving solubility of poorly water-soluble compounds</li>
                <li>Purpose: BCD binds to and removes cholesterol from cell membrane → determining highest concentration before apoptosis</li>
                <li>Serves as 'negative' cholesterol concentration</li>
                <li>Helps determine 'lowest cholesterol' concentration condition for transfection and assay</li>
              </ul>
              <li>Started 3/17</li>
              <li>BCD concentrations: 50, 100, 150, 200 µM (mirroring original cholesterol range)</li>
            </ul>

            <h4>Cholesterol Growth Curve Update</h4>
            <ul>
              <li>3rd round of cholesterol GC (2nd of 30 µM and 50 µM)</li>
              <li>Additional concentration: 60 µM</li>
            </ul>

            <div className="image-gallery">
              <h4>BCD Images and Trends</h4>
              <div className="image-row">
                <img src="images\Week5_BCD.png" alt="Week 5 BCD Analysis" />
              </div>
            </div>

            <h4>Current Doubling Times</h4>
            <ul>
              <li>Cholesterol condition doubling times:</li>
              <ul>
                <li>Control – 4.8 d</li>
                <li>30 µM - 4.87 d</li>
                <li>50 µM - 4.48 d</li>
                <li>70 µM - 8.16 d (?)</li>
                <li>80 µM - 4.64 d (?)</li>
                <li>100 µM - 18.73 d (?)</li>
                <li>150 µM - N/A</li>
                <li>200 µM - N/A</li>
              </ul>
            </ul>

            <div className="image-gallery">
              <h4>Killer Curve Update</h4>
              <div className="image-row">
                <img src="images\Week5_KillCurveUpdate.png" alt="Week 5 Killer Curve Update" />
              </div>
            </div>
          </div>
        </section>

        <section className="week-section">
          <h2>Week 6</h2>
          
          <div className="section-content">
            <h3>Cell Team</h3>
            <h4>Current Growth Curves</h4>
            <ul>
              <li>Cholesterol#3 [Q7] (control, 30, 50, 60, 70)</li>
              <ul>
                <li>2x for 50 and 60 [Q7 and Q8]</li>
              </ul>
              <li>BCD#2 [Q8] (control, 30, 50, 70, 100, 150)</li>
            </ul>

            <h4>G418 Plate</h4>
            <ul>
              <li>11 wells → 100-1000 µM concentration + control</li>
            </ul>
            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week6_G4Images1.png" alt="Week 6 G418 Image 1" />
                <img src="images\Week6_G4Images2.png" alt="Week 6 G418 Image 2" />
              </div>
              <div className="image-row">
                <img src="images\Week6_G4Images3.png" alt="Week 6 G418 Image 3" />
                <img src="images\Week6_G4Images4.png" alt="Week 6 G418 Image 4" />
              </div>
            </div>

            <h4>Doubling Times Analysis</h4>
            <h5>Cholesterol Condition Doubling Times</h5>
            <ul>
              <li>Control – 4.8 d</li>
              <li>30 µM - 4.87 d</li>
              <li>50 µM - 4.48 d</li>
              <li>60 µM - </li>
              <li>70 µM - 8.16 d (?)</li>
              <li>80 µM - 4.64 d (?)</li>
              <li>100 µM - 18.73 d (?)</li>
              <li>150 µM - N/A</li>
              <li>200 µM - N/A</li>
            </ul>

            <h5>BCD Condition Doubling Times</h5>
            <ul>
              <li>Control – 4.8 d</li>
              <li>30 µM - </li>
              <li>50 µM - 3.79 d</li>
              <li>70 µM - </li>
              <li>100 µM - 3.37 d</li>
              <li>150 µM - 3.42 d</li>
              <li>200 µM - 3.95 d</li>
            </ul>

            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week6_BCD.png" alt="Week 6 BCD Analysis" />
              </div>
              <div className="image-row">
                <img src="images\Week6_Transfection.png" alt="Week 6 Transfection" />
                <img src="images\Week6_Transfection1.png" alt="Week 6 Transfection 1" />
              </div>
            </div>

            <h3>DL Assay Team</h3>
            <ul>
              <li>Determined that the GloMax tool is more sensitive to luminescence as compared to the FLx800</li>
              <li>First dual luciferase assay completed, gaining important experience for future runs</li>
              <ul>
                <li>Prepped DLA reagent for future experiments</li>
                <li>Experiment performed on transfected cells with V2</li>
              </ul>
            </ul>

            <div className="image-gallery">
              <div className="image-row">
                <img src="images\Week6_GloMax.png" alt="Week 6 GloMax" />
                <img src="images\Week6_FLx800.png" alt="Week 6 FLx800" />
              </div>
              <div className="image-row">
                <img src="images\Week6_DLA_Trial1.png" alt="Week 6 DLA Trial 1" />
                <img src="images\Week6_DLAFigures.png" alt="Week 6 DLA Figures" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
