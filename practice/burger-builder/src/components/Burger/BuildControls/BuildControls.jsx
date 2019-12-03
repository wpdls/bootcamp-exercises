import React from 'react';

import './buildcontrols.css';
import BuildControl from './BuildControl/BuildControl.jsx';


const controls = [
    { label: 'Salad', type: '4' },
    { label: 'Bacon', type: '3' },
    { label: 'Cheese', type: '1' },
    { label: 'Meat', type: '0' },

];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;