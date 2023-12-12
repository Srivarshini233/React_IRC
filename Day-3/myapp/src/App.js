import Nav from "./components/nav";
import './Assets/CSS/nav.css'
import './Assets/CSS/home.css'
import Home from "./components/Home";
function App(){
    return (
     <div className="main">
        <Nav/>
                <Home/>
            <p>
                Hello World
            </p>
         </div>
    )
}
export default App;