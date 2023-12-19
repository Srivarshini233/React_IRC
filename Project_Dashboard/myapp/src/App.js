import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
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
            <Route path="/dashboard" element={<Dashboard/>}/>
           </Routes>
        </>
    );
}
export default App;
