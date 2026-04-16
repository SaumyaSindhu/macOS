import React from 'react';
import MacWindow from './MacWindow';
import './resume.scss';

const Resume = () => {
  return (
    <MacWindow width="520px" height="680px" x={300} y={40}>
      <div className="resume-window">
        <embed src="/resume.pdf"></embed>
      </div>
    </MacWindow>
  );
}

export default Resume