import React from 'react';




export default class Product extends React.Component {
    render() {
    return (
        <div className="content">
            <h1>Products</h1>
            <div className="product">
                <img src={this.props.image_url} alt={this.props.name}/>
                <div className="name">{this.props.name}</div>
            </div>
           
        </div>
    );
    }
    }