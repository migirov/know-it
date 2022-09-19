import React from 'react';
import "./DateTimeDisplay.styles.css";
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
