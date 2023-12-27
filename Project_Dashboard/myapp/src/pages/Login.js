import React, { useState, useEffect, useContext } from "react";
import '../Assets/CSS/Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext"; // Import UserContext


function LoginTemplate() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://6583244202f747c8367b278f.mockapi.io/e-com")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(
      (user) => user.username === loginDetails.username
    );

    console.log(foundUsers);
    

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      alert("Login Succesfully");
      navigate("/Dashboard");
    } else {
      alert("Account not found please register");
      
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-container">
      <div className="container1 shadow">
              <h4 heading4>Please login to your account</h4>
              <form onSubmit={handleLogin}>
                <div >
                  <lable>
                    <input
                      type="username"
                      name="username"
                      className="input_style"
                      placeholder="Username"
                      label="Required"
                      value={loginDetails.username}
                      onChange={handleInputChange}
                    />
                  </lable>
                </div>
                <br></br>
                <div >
                  <lable>
                    <input
                      type="password"
                      name="password"
                      className="input_style"
                      placeholder="Password"
                      value={loginDetails.password}
                      onChange={handleInputChange}
                      label="Required"
                    />
                  </lable>
                
                </div>
                <br></br>
                <div class="text-center pt-1 mb-5 pb-1">
                  <Link to="/Dashboard">
                    <button onClick={handleLogin}
                      className="button1"
                      type="submit"
                    >
                      Log in
                    </button>
                  </Link>
                  <br></br>
                </div>
              </form>
              <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2">
                  <h3>Don't have an account?</h3>
                </p>
                <Link to="/SignIn">
                  <button type="button" className="button1">
                    Create 
                  </button>
                </Link>
              </div>
            </div>
      </div>
  );
}

export default LoginTemplate;