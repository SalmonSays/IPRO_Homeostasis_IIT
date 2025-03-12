import * as React from 'react';
import { PageTemplate } from './PageTemplate';
import './PageTemplate.css';

export const Notebook: React.FC = () => {
  return (
    <PageTemplate 
      title="Lab Notebook" 
      subtitle="Detailed documentation of our experimental journey"
    />
  );
};
