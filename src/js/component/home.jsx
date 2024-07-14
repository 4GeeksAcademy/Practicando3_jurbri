// Home.js
import React from 'react';
import Categories from './categories';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

function Home() {
  return (
    <div className="container-fluid">
		<Navbar/>
		<Header/>
		<Categories/>
		<Footer/>
      
    </div>
  );
}

export default Home;