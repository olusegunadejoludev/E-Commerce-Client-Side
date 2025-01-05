import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-black border-0 text-start">
  <img src="/assets/bg 5.webp" className="card-img" alt="background" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">Biggest Online Shop</h5>
    <p className="card-text lead fs-2">You order, we deliver...</p>
      </div>
    </div>
  </div>
  <Products/>
</div>
  );
}

export default Home;
