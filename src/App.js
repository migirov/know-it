// import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
// import PersonCard from './components/person-card/person-card.component';
import Opening from './components/opening/opening.component';
import CountdownTimer from './components/countdown/CountdownTimer.component';
import RegisterFormCard from './components/register-form/register-form-card.component';
import BottomBanner from "./components/bottom-banner/bottomBanner.component";
import Info from "./components/Info/Info.component";

const App = () =>{
  // const NUM_DAYS_IN_MS = 57 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();
  const event_date = new Date('2022-11-22T08:00:00');
  const dateTimeAfterNumDays = event_date;

  const People = [
    {
      name: 'אייל ברישניקוב',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      job: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
    {
      name: 'שחר הר נשר',
      job: 'Software Engineer',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
    {
      name: 'הדר יחזקאל',
      job: 'Software Engineer',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
    {
      name: 'רון קדוש',
      job: 'Software Engineer',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <BottomBanner></BottomBanner>
      {
        <Routes>
          <Route path="*" element={<Opening targetDate={dateTimeAfterNumDays} />} />
        {/* <Route path="/countdown" element={<CountdownTimer targetDate={dateTimeAfterNumDays} />} /> */}
          <Route path="/register" element={<RegisterFormCard />} />
          <Route path="/info" element={<Info />} />
        </Routes>}
        {/* <div className='main-page'> */}
        {/* <Opening></Opening> */}
        {/* <CountdownTimer targetDate={dateTimeAfterNumDays} /> */}
        {/* <button className='start-form' onClick={startForm}></button> */}
        {/* <RegisterFormCard></RegisterFormCard> */}
      {/* </div> */}
      {/* <div className="card-list">
        {People.map((element) => {
          return (
            <PersonCard 
            name = {element.name}
            job = {element.job}
            description = {element.description}
            avatar = {element.src}
            />
        )})}
      </div> */}
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
