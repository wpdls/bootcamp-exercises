import React, {Component} from 'react';

import './modal.css';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {  
            return nextProps.show !== this.props.show; 
    }

 render () {
     return(    <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
        className="Modal"
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
            {this.props.children}
        </div>
    </Aux>)
 }
}
export default Modal;