import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import PersonCard from './components/person-card/person-card.component';

const App = () =>{
  const People = [
    {
      name: 'שחר והדר',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      job: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
    {
      name: 'שחר והדר',
      job: 'Software Engineer',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
    {
      name: 'שחר והדר',
      job: 'Software Engineer',
      src: 'https://www.hrportal.co.il/wp-content/uploads/2019/03/%D7%97%D7%92%D7%99%D7%AA-%D7%90%D7%A4%D7%A8%D7%AA%D7%99.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.',
    },
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="card-list">
        {People.map((element) => {
          return (
            <PersonCard 
            name = {element.name}
            job = {element.job}
            description = {element.description}
            avatar = {element.src}
            />
        )})}
      </div>
    </div>
  );
}

export default App;
