// import "./opening.styles.css"
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay.component';
import { useCountdown } from '../../hooks/useCountdown';
import "./CountdownTimer.styles.css";

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>תם הזמן!</p>
      </div>
    );
  };
  
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
        <div className="countdown-container">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} id="days"/>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} id="hours" />
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} id="minutes"/>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} id="seconds" />
          </div>
      </div>
    );
  };
  
  const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
    if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
    );
}
};

export default CountdownTimer;