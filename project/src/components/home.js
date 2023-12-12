import React, { useState } from 'react';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const[data,setData] = useState({
    username :'',
    password : ''
  })
  const toggle= () => {
    setShowMessage(!showMessage);
  };
  const Login=(e)=>{
    e.preventDefault();
    alert(data.username + data.password)}
  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }

  return (
    <div>
    <div className="home">
      <header>
        <h1>Your E-Commerce Store</h1>
        <nav>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Login" onClick={toggle}>Login</a></li>
          </ul>
        </nav>
      </header>
      {showMessage? (
        <div class = "bg-container">
            <div className = "container1 shadow" id = "bg-container">
              <form className = "d-flex flex-row justify-content-center">
                  <h2>LOGIN</h2>
                  <input type = "text" id = "userName" name = "" placeholder="NAME"onChange={handleChange} class ="input_style"/>
                  <input type = "password" id = "pwd1" name = "" placeholder="PASSWORD" onChange={handleChange} class ="input_style"/>
                  <div class = "button-design">
                   <input  type = "submit" value= "Login" onClick={toggle} class = "button"/>
                   <input  type = "submit" value= "Cancel"  class = "button"/>
                   </div>
              </form>
      </div>
      </div>
      ):('')}

      <section className="hero">
        <h2>Welcome to Our E-Commerce Store</h2>
        <p>Discover a wide range of products for all your needs.</p>
        <a href="#products" className="btn">Explore Products</a>
      

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
      </section>
      </section>
      <footer>
        <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved.</p>
      </footer>
    </div>
    
    </div>
  );
};

export default Home;