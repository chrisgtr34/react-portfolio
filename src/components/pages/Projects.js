import React from 'react';
import weather from '../../images/weather.png'
import ecommerce from '../../images/ecommerce.png'
import fitcal from '../../images/fitcal.png'
import gasncharge from '../../images/gasncharge.png'


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
      <br></br>
      <br></br>
      <div>
        <a href="https://fitcalxxii.herokuapp.com/" target="_blank" rel="noreferrer" >
          <img src={fitcal} className="fitcal" alt="fitcal.png" />
          <h2>
            FitCal
          </h2>
        </a>
      </div>
      <div>
        <a href="https://chrisgtr34.github.io/weather-dashboard/" target="_blank" rel="noreferrer" >
          <img src={weather} className="weather" alt="weather.png" />
          <h2>
            Weather Dashboard
          </h2>
        </a>
      </div>
      
      <div>
        <a href="https://drive.google.com/file/d/1F8EVs6XG1tDzjmWHRKr5VEDzIT7YKxS-/view" target="_blank" rel="noreferrer" class name="ecommerce">
          <img src={ecommerce} className="ecommerce" alt="ecommerce.png" />
          <h2>
            Ecommerce 
          </h2>
        </a>
      </div>
      <div>
        <a href="https://gasncharge.herokuapp.com/" target="_blank" rel="noreferrer" class name="gasncharge">
          <img src={gasncharge} className="ecommerce" alt="gasncharge.png" />
          <h2>
            gasncharge 
          </h2>
        </a>
      </div>
    </div >
  );
}
