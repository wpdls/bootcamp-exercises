import React from 'react';

import './buildcontrols.css';
import BuildControl from './BuildControl.jsx';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];

const buildControls = ( props ) => {
    /*  console.log( 'Buildcontrols', props.ingredientsList );
     console.log( 'Buildcontrols', controls ); */
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price}</strong></p>
            {
                props.ingredientsList.map( ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientAdded( ctrl.type )}
                        removed={() => props.ingredientRemoved( ctrl.type )}
                        disabled={props.disabled[ctrl.type]} />
                ) )
            }
            <button className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
};

export default buildControls;