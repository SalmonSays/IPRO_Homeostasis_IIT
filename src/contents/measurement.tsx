import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';
import { Inspirations, InspirationLink } from "../components";

export const Measurement: React.FC = () => {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "UC_Davis", pageName: "Measurement" },
    { year: 2019, teamName: "Newcastle", pageName: "Measurement" },
    { year: 2019, teamName: "Evry_Paris-Saclay", pageName: "Measurement" },
    { year: 2019, teamName: "GENAS_China", pageName: "Measurement" },
    { year: 2020, teamName: "Calgary", pageName: "Measurement" },
    { year: 2020, teamName: "CSMU_Taiwan", pageName: "Measurement" },
  ];

  return (
    <PageTemplate 
      title="Measurement" 
      subtitle="Quantifying and analyzing our experimental results"
    />
  );
};
