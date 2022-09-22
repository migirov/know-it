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

  const DATA = [
    {
      "opening-txt": "אנו מתרגשים להזמינכם לכנס ה4 בנושא חדשנות בלמידה, כנס מיוחד וחוויתי שמחבר מגזרים שונים למכנה משותף - חדשנות בלמידה.",
      "for-whom-txt": "800 מפתחי ומנהלי הדרכה מיחידות צה״ל, מגופי ביטחון נוספים, מהאקדמיה, מהתעשייה, ומהרשויות המקומיות. ",
      "where-txt": "קריית ההדרכה - מחנה אריאל שרון.",
      "when-txt": "הכנס יתקיים ביום שלישי ה-22 בנובמבר 2022 בין השעות 8:30-15:00.",
      "plans": "2 הרצאות מליאה, מושבים, סדנאות, תערוכת ספקים, אוכל טוב, ומינגלינג עם חברי הצוות שלכם.",
    }
  ]
  return (
    <div className="App">
      <NavBar></NavBar>
      <BottomBanner></BottomBanner>
      {
        <Routes>
          <Route path="*" element={<Opening targetDate={dateTimeAfterNumDays}/>} />
          <Route path="/register" element={<RegisterFormCard />} />
          <Route path="/info" element={<Info OpeningTxt={DATA[0]["opening-txt"]} forWhomTxt={DATA[0]["for-whom-txt"]} whereTxt={DATA[0]["where-txt"]} whenTxt={DATA[0]["when-txt"]} plans={DATA[0]["plans"]}/>} />
        </Routes>}
    </div>
  );
}

export default App;
