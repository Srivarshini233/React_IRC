import './Asset/CSS/style.css'

function App(){
    return (
        <div className='container'>
           <form className = "d-flex flex-row justify-content-center">
                    <h2>REGISTERATION FORM </h2>
                    <input type = "text" id = "userName" placeholder="NAME" className ="input_style"/>
                   
                    <input type = "email" id = "email" placeholder="EMAIL" className ="input_style"/>
                    
                    <input type = "password" id = "pwd1" placeholder="PASSWORD" className ="input_style"/>
                   
                    <input type = "number" id = "number" placeholder="NUMBER" className ="input_style"/>
                
                    <input type = "submit" value= "Register" className = "button"/>
            </form>
        </div>
    )
}
export default App
 