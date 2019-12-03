import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './burgeringredient.css';

class BurgerIngredient extends Component {
    render () {
    let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case ('0'):
            ingredient = <div className="Meat"></div>;
            break;
        case ('1'):
            ingredient = <div className="Cheese"></div>;
            break;
        case ('2'):
            ingredient = <div className="Bacon"></div>;
            break;
        case ('3'):
            ingredient = <div className="Salad"></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;

    }
   
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;