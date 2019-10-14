import React from 'react';


import '../style.scss';

export default class DayForecast extends React.Component {
    const weather = `day-forecast__image  weather-${this.props.weather}`;
    render() {
    return (
        <div className="day-forecast">
        <div className="day-forecast__header">
            {this.props.weekday}
        </div>
        <div className="day-forecast__body">
          <div className= {weather} />
          <div className="day-forecast__temps">
              <span className="temp-day">
                  {this.props.tempDay}
              </span>
              <span className="temp-night">
                  {this.props.tempNight}
              </span>
          </div>
        </div>
      </div>
    );
  }
}
