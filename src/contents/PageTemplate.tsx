import * as React from 'react';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ title, subtitle }) => {
  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="row mt-4 mb-5">
        <div className="col text-center">
          <h1 className="display-4 mt-4">{title}</h1>
          {subtitle && <p className="lead">{subtitle}</p>}
        </div>
      </div>

      {/* Content Section */}
      <div className="row">
        <div className="col">
          <div className="content-section p-4">
            <p className="text-center fs-5">
              Content for this page is coming soon. Check back later for updates!
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="row mt-5">
        <div className="col text-center">
          <p className="lead mb-4">Want to learn more about our project?</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-outline-primary">View Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
}; 