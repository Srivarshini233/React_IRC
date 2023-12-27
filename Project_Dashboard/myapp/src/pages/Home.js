import React, { useState } from 'react';
import { Link } from 'react-router-dom'


function Home(){

return (
  <div>
    <div className="home">
      <header>
        <h1>TrendTrove🛍️</h1>
        <nav>
          <ul>
            <li><Link to ="/Product">Products</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
            <li><Link to="/AboutUs">Contact</Link></li>
            <li><Link to="/Login" >Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Our E-Commerce Store</h2>
        <p>Discover a wide range of products for all your needs.</p>
        <Link to = "/Product" className="btn">Explore Products</Link>
        <div className="images-align">
          <button className="btn-imag-style"><img className="home-images" src="https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-bow-tie-wallet-wooden-background-watch-sunglasses-bag-hat-belt-shoes-wood-table_1921-94.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
          <button className="btn-imag-style"><img className="home-images" src="https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301851.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
          <button className="btn-imag-style"><img className="home-images" src="https://img.freepik.com/free-photo/bearded-man-stylish-tuxedo-red-tie-strong-man-s-hands_8353-10949.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"></img></button>
          <button className="btn-imag-style"><img className="home-images" src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13967.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
          <button className="btn-imag-style"><img className="home-images" src="https://img.freepik.com/free-photo/arrangement-clothes-accessories-suitcase_23-2149064205.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
        </div>
      </section>
    </div>

    

    <footer>
      <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved.</p>
    </footer>
  </div>
);
}

export default Home;