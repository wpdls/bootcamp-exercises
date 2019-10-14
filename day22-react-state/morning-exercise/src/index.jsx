import React from 'react';
import ReactDOM from 'react-dom';

import DayForecast from './contact/DayForecast.jsx';
import Weekly from './contact/Weekly.jsx';
import './style.scss';
import './index.html';
import forecast from './forecast';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <Weekly />
        {
          forecast.map(forecast => (
            <DayForecast 
              weekday={forecast.weekday} 
              weather={forecast.weather}
              tempDay={forecast.tempDay} 
              tempNight={forecast.tempNight} 
             />
          ))
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
