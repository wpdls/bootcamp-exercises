import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Header.jsx';
import Search from './components/Header.jsx';
import ProductList from './components/Header.jsx';


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
  
