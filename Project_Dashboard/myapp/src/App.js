import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignIn';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import AboutUs from './component/AboutUs';
import User from './component/User';
import Setting from './component/Setting';
import Product from './pages/Product';

import { Route,Routes } from 'react-router-dom';
import './Assets/CSS/style.css'

function App(){
    return (
        <>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/User" element={<User />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/SignIn" element={<SignUp />} />
            <Route path="/Product" element={<Product />} />
        
           </Routes>
        </>
    );
}
export default App;
