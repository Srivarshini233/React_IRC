import   React  from 'react';
import {useState} from 'react';
import {AddUser} from '../Services/API'

function Adduser(){
   const [data,setData] = useState({
      username:'',
      password:''
   });
   const handleChange=(e)=>{
        setData({...data,[e.target.id]: e.target.value})
   }
   const handleSubmit=(e)=>{
      try{
         const res = AddUser(data);
         e.preventDefault();
         alert("susseddfully added");
      }
      catch(e){
         console.log(e);
      }
   }
   return (<>
    <form>
        <input type = 'text' id = "username" placeholder='username' onChange={handleChange}/>
   
        <input type = 'password' id = "password" placeholder='password' onChange={handleChange}/>
        <button type="submit" className='submit-btn' onClick={handleSubmit}>Submit</button>
      </form>
   </>)
}
export default Adduser;