import React, { useState, useEffect } from "react";
import "./Progress.css";

export default function Progress() {
  const [isStoped, setIsStoped] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);

  const stop = () => {
    setIsStoped((prev) => !prev);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (!isStoped) {
        if (lineWidth < 100) {
          setLineWidth(lineWidth + 1);
        }
      } else {
        clearTimeout(id);
      }
    }, 100);
  });

  return (
    <div className="progress-container">
      <div className="progress-box">
        <div className="progress-line" style={{ width: `${lineWidth}%` }}>
          {lineWidth}%
        </div>
      </div>
      <button className="ss-button" onClick={stop}>
        Start / Stop
      </button>
    </div>
  );
}
