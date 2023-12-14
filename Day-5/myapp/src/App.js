import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Nav from './components/Nav'
import { Route,Routes } from 'react-router-dom';

function App(){
    return (
        <>
           <Nav />
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
           </Routes>
        </>
    );
}
export default App;
