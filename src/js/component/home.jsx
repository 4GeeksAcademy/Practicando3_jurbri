// Home.js
import React, { useState } from 'react';
import Categories from './categories';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

function Home() {
  const [count, setCount] = useState(0);
  const [thumbsUpSize,setThumbsupSize] = useState('1em');
  const [thumbsDownSize,setThumbsDownSize] = useState('1em');

  return (
    <div className="container-fluid">
      <div className='container text-center d-flex flex-column align-items-center '> 
        <h2 className="mb-4">{count} likes</h2>
        <div className="d-flex justify-content-center mb-4">
        <span onClick={() => setCount(count + 1)} 
                            onMouseEnter={() => setThumbsupSize('2em')}
                            onMouseLeave={() => setThumbsupSize('1em')}
                            style={{ cursor: 'pointer', fontSize: thumbsUpSize }}
          
          >👍</span>
        <span onClick={() => setCount(count - 1)} 
                             onMouseEnter={() => setThumbsDownSize('2em')}
                             onMouseLeave={() => setThumbsDownSize('1em')}                      
                             style={{ cursor: 'pointer', fontSize: thumbsDownSize }}
        >👎</span>
        
        </div>
        <h3>Like or dislike to increase/decrease</h3>
      </div>

      <Navbar />
      <Header />
      <Categories />
      <Footer />

    </div>
  );
}

export default Home;