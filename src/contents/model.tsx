import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';
import { Inspirations, InspirationLink } from "../components";

export const Model: React.FC = () => {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "GreatBay_China", pageName: "Model" },
    { year: 2018, teamName: "Leiden", pageName: "Model" },
    { year: 2019, teamName: "IISER_Kolkata", pageName: "Model" },
    { year: 2019, teamName: "Exeter", pageName: "Model" },
    { year: 2019, teamName: "Mingdao", pageName: "Model" },
    { year: 2020, teamName: "Harvard", pageName: "Model" },
    { year: 2020, teamName: "Leiden", pageName: "Model" },
  ];

  return (
    <PageTemplate 
      title="Model" 
      subtitle="Mathematical and computational analysis of our system"
    />
  );
};
