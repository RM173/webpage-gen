import React from 'react';
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error-page" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Error: 404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  );
}

export default Error404;