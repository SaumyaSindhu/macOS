import React from 'react';
import { Rnd } from 'react-rnd';
import './window.scss';

const MacWindow = ({
  children,
  width = "680px",
  height = "520px",
  x = 100,
  y = 80,
}) => {
  return (
    <Rnd default={{ width, height, x, y }} minWidth={400} minHeight={300}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>saumyasindhu -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow