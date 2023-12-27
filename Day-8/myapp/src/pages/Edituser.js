import React from 'react';
import { EditUser, getUserId } from '../Services/API';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Edituser() {
   const { id } = useParams()
   const navigate = useNavigate()
   const [data, setData] = useState({
      username: '',
      password: ''
   })

   const fetchUser = async () => {
      try {
         const res = await getUserId(id)
         setData(res.data)
      }
      catch (e) {
         console.log(e);
      }
   }
   const handleChange = (e) => {
      setData({ ...data, [e.target.id]: e.target.value })
   }
   const handleSave =async(e) => {
      try {
         const res = await EditUser(id,data);
         e.preventDefault();
         console.log(res.data)
         if(res.status===200)
         alert("susseddfully updated");
      }
      catch (e) {
         console.log(e);
      }
   }
   useEffect(()=>{
      fetchUser()
   },[])
   return (<>

      <form>
         <input type='text' value={data.username} id="username" placeholder='username' onChange={handleChange} />

         <input type='password'value={data.password} id="password" placeholder='password' onChange={handleChange} />
         <button type="submit" className='submit-btn' onClick={handleSave}>Save</button>
      </form>
   </>)

}
export default Edituser;