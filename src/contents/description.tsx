import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';

export const Description: React.FC = () => {
  return (
    <PageTemplate 
      title="Project Description" 
      subtitle="An innovative approach to cholesterol management using synthetic biology"
    />
  );
};
