import React from 'react';
import BurgerBuilder from './BurgerBuilder.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../index.scss';


export default class FrontPage extends React.Component {

    render() {
        // let container = document.querySelector('.container');
        // const change = (x) => {
        //     container.classList.toggle('change');
        // }
        // container.addEventListener('click', change);

        return (
        
            <div className="frontpage">

                <div className="bars">
                    <div className="container">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>

                <div className="center">
                    <h2>!click here to build your own pizza!</h2>
                    <button type="button" className="button">
                        {/* <Route path="/burgerbuilder" component={BurgerBuilder} /> */}
                        {/* <Route path="/burgerbuilder" render={props => (
                            <React.Fragment>
                    <a href={<BurgerBuilder />}>Pizza Time!</a>
                            </React.Fragment>
                        )} /> */}
                        
                    </button>
                </div>

            </div>
        
        );
    }
    
}