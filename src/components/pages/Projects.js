import React from 'react';
import weather from '../../images/weather.png'

export default function Projects() {
  return (
    <div>
      <h1
        style={{ color: 'white', margin: 30 }}>Projects
      </h1>

      <h3 style={{ color: 'white', margin: 30 }}>
        Here are a few projects showcasing some of the work ive done thus far.
        More projects soon to follow as I advance my skills.
      </h3>

      <div>
        <a href="https://chrisgtr34.github.io/weather-dashboard/" target="_blank" rel="noreferrer" class name="weather">
          <img  src={weather} className="weather" alt="weather.png" />
        </a>
      </div>
      <div>
        <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer" class name="weather">
          <img  src={weather} alt="weather.png" />
        </a>
        <div>
        <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer" class name="weather">
          <img  src={weather} alt="weather.png" />
        </a>
      </div>
      </div>
    </div >
  );
}
