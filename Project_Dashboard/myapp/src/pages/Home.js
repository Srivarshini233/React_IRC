import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [visible,setVisible] = useState(false);
  const[data,setData] = useState({
    username :'',
    password : ''
  })
  const toggle= () => {
    setShowMessage(!showMessage);
  };
  const toggleRegister= () => {
    setShowMessage(!showMessage);
  };
  const Login=(e)=>{
    e.preventDefault();
    alert(data.username + data.password)}
  const Register=(e)=>{
    e.preventDefault();
    alert(data.username + data.password)}
  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }

  return (
    <div>
    <div className="home">
      <header>
        <h1>TrendTrove🛍️</h1>
        <nav>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><Link to = "/Categories">Categories</Link></li>
            <li><Link to = "/Contact">Contact</Link></li>
            <li><Link to = "/Dashboard">Dashboard</Link></li>
            <li><a href="#Login" onClick={toggle}>Login</a></li>
          </ul>
        </nav>
      </header>
      {showMessage? (
        <div class = "bg-container">
            <div className = "container1 shadow" id = "bg-container">
              <form className = "">
                  <h2>LOGIN</h2>
                  <input type = "text" id = "userName" name = "" placeholder="NAME" onChange={handleChange}  class ="input_style" />
                  <input type = "password" id = "pwd1" name = "" placeholder="PASSWORD" onChange={handleChange} required class ="input_style"/>
                  <div class = "button-design">
                   <input  type = "submit" value= "Login" onClick={toggle} class = "button1"/>
                   <input  type = "submit" value= "Cancel"  class = "button1"/>
                   </div>
              </form>
            
      </div>
      </div>
      ):('')}
      <div>
      <section className="hero">
        <h2>Welcome to Our E-Commerce Store</h2>
        <p>Discover a wide range of products for all your needs.</p>
        <a href="#products" className="btn">Explore Products</a>
        <div className = "images-align">
        <button className="btn-imag-style"><img className = "home-images" src = "https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-bow-tie-wallet-wooden-background-watch-sunglasses-bag-hat-belt-shoes-wood-table_1921-94.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
        <button className="btn-imag-style"><img className = "home-images" src = "https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301851.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
        <button className="btn-imag-style"><img className = "home-images" src = "https://img.freepik.com/free-photo/bearded-man-stylish-tuxedo-red-tie-strong-man-s-hands_8353-10949.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"></img></button>
        <button className="btn-imag-style"><img className = "home-images" src = "https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13967.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
        <button className="btn-imag-style"><img className = "home-images" src = "https://img.freepik.com/free-photo/arrangement-clothes-accessories-suitcase_23-2149064205.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=sph"></img></button>
        </div>
        </section>
        </div>

      <section id="products " className="product-list card">
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/premium-photo/miss-beauty-pageant-queen-contest-asian-gown_121764-480.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309642.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/free-psd/fashion-new-collection-social-media-instagram-post-template_47987-16164.jpg?w=740&t=st=1702406167~exp=1702406767~hmac=f002a63cd7271344d3ece545aa3a0618cb1477222edba8bc020c45fd60de74c4"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/premium-photo/fashion-flat-lay-pink-peony-flower-with-jeans-shoes-accessories_73763-198.jpg?w=360"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
      </section>
      <section id="products" className="product-list">
        
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/premium-photo/miss-beauty-pageant-queen-contest-asian-gown_121764-480.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309642.jpg?size=626&ext=jpg&ga=GA1.1.1525579097.1667655354&semt=ais"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/free-psd/fashion-new-collection-social-media-instagram-post-template_47987-16164.jpg?w=740&t=st=1702406167~exp=1702406767~hmac=f002a63cd7271344d3ece545aa3a0618cb1477222edba8bc020c45fd60de74c4"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://img.freepik.com/premium-photo/fashion-flat-lay-pink-peony-flower-with-jeans-shoes-accessories_73763-198.jpg?w=360"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
      </section>
  
      <footer>
        <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved.</p>
      </footer>
    </div>
    
    </div>
  );
};

export default Home;