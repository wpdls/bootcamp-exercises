import React from 'react';
import './index.scss';

import Seat from './seat.jsx';
// import './index.scss';
// import './index.html';

export default class Row extends React.Component {
  render() {

    return (
        
        <Seat 
        occupancy='occupied'
        number='12'
        />
        <Seat 
        occupancy='free'
        number='13'
        />
        <div className="aisle-spacer"></div>
         <Seat 
        occupancy='selected'
        number='14'
        />
        <Seat 
        occupancy='free'
        number='15'
        />
      
    );
  }
}
