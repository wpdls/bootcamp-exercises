import React, { Component } from 'react';

// import NewAux from '../hoc/NewAux.jsx';
import Burger from './Burger.jsx';
import BuildControls from './Controls/BuildControls.jsx';
import Modal from './Summary/Modal.jsx';
import DisplaySummary from './Summary/DisplaySummary.jsx';

import ErrorBoundary from '../../ErrorBoundary.jsx';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.4
}

class BurgerBuilder extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            ingredientsList: [],
            totalPrice: 4, //base price
            purchasable: false,
            purchasing: false
        }
        this.updatePurchaseState = this.updatePurchaseState.bind( this );
        this.addIngredientHandler = this.addIngredientHandler.bind( this );
        this.removeIngredientHandler = this.removeIngredientHandler.bind( this );
        this.purchaseHandler = this.purchaseHandler.bind( this );
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind( this );
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind( this );
    }

    componentDidMount() {
        const doFetch = async () => {
            const response = await fetch( '/api/ingredients' );
            const data = await response.json();

            const theObject = {};
            let thePrice = ''; //
            const theArray = [];

            for ( let key in data ) {
                theObject[data[key].category] = 0;
                thePrice = data[key].unit_price; //
                
                theArray.push( {
                    label: data[key].name, type: data[key].category
                } );
            }
            this.setState( { ingredients: theObject, ingredientsList: theArray, INGREDIENT_PRICES: thePrice } ); //
        }
        doFetch();
    }

    updatePurchaseState( ingredients ) {

        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey]
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler( type ) {
        const oldCount = this.state.ingredients[type];
        console.log( 'oldcount value', this.state.ingredients[type] );
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = this.state.INGREDIENT_PRICES; //
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        console.log('price add', newPrice)

        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
    }

    removeIngredientHandler( type ) {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = this.state.INGREDIENT_PRICES; // (i deleted [type] after ING..)
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );

    }

    purchaseHandler() {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler() {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler() {
        // alert( 'You continue!' );
        this.props.submitOrderIngredients( this.state.ingredients );
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };

        return (
            <ErrorBoundary>
                <div>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <DisplaySummary
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler} />
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientsList={this.state.ingredientsList}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                </div>
            </ErrorBoundary>
        )
    }
}

export default BurgerBuilder;