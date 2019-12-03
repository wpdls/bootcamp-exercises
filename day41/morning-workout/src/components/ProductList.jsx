import React from 'react';
import Product from './components/Product.jsx';



export default class ProductList extends React.Component {
    render() {
    return (
        <div className="content">
            <h1>Products</h1>
            <Product />
        </div>
    );
    }
    }