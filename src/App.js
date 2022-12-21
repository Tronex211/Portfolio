import logo from './logo.svg';
import './App.css';
import React from 'react';
import Game from './TicTacToe';

function App() {
    return (
      <div>
        <h1>Levi</h1>
        <h2>Epic</h2>
        <h3>Experience</h3>
        <ul>
          <li>
            <h4>Company A</h4>
            <p>Software Engineer</p>
            <p>Jan 2020 - Present</p>
            <ul>
              <li>Developed new features for the company's product using React.js and Redux</li>
              <li>Collaborated with the design team to improve the user interface</li>
            </ul>
          </li>
          <li>
            <h4>Company B</h4>
            <p>Software Developer</p>
            <p>Jul 2018 - Dec 2019</p>
            <ul>
              <li>Implemented new features and bug fixes for the company's web application using Angular</li>
              <li>Worked with the QA team to ensure the stability and quality of the product</li>
            </ul>
          </li>
        </ul>
      </div>
    );
}

export default App;
