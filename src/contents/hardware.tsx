import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';
import { Inspirations, InspirationLink } from "../components";

export const Hardware: React.FC = () => {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "Valencia_UPV", pageName: "Hardware" },
    { year: 2018, teamName: "Unesp_Brazil", pageName: "Hardware" },
    { year: 2019, teamName: "BIT", pageName: "Hardware" },
    { year: 2019, teamName: "Bielefeld-CeBiTec", pageName: "Hardware" },
    { year: 2019, teamName: "Nanjing-China", pageName: "Hardware" },
    { year: 2020, teamName: "Vilnius-Lithuania", pageName: "Hardware" },
    { year: 2020, teamName: "ZJUT_China_B", pageName: "Hardware" },
  ];

  return (
    <PageTemplate 
      title="Hardware" 
      subtitle="The technical infrastructure supporting our research"
    />
  );
};
