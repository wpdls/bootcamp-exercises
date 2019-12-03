import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import ProductList from './ProductList.jsx';


export default class App extends React.Component {
    render() {
      return (
        
    <div id="page">
        <Header />

        <div id="main">
            <Search />

            <ProductList />
       </div>

       <Footer />

    </div>
        
      );
    }
  }
  
