import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';
import { Inspirations, InspirationLink } from "../components";

export const Team: React.FC = () => {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "CU", pageName: "Team" },
    { year: 2019, teamName: "UANL", pageName: "Team" },
    { year: 2019, teamName: "William_and_Mary", pageName: "Team" },
    { year: 2020, teamName: "BOKU-Vienna", pageName: "Team" },
    { year: 2020, teamName: "CAU_China", pageName: "Team_Member" },
    { year: 2020, teamName: "Lethbridge", pageName: "Members" },
  ];

  return (
    <PageTemplate 
      title="Our Team" 
      subtitle="Meet the passionate individuals behind our innovative solution"
    />
  );
};
