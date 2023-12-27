import  axios  from 'axios';
import Adduser from './../pages/Adduser';
const URL = 'http://localhost:3000'


const getUser = ()=>axios.get(`${URL}/users`)
const getUserId = (id)=>axios.get(`${URL}/users/${id}`)
const EditUser = (id,data) =>axios.put(`${URL}/users/${id}`,data)
const DeleteUser = (id)=>axios.delete(`${URL}/users/${id}`)
const AddUser = (data)=>axios.post(`${URL}/users`,data)


export {getUser, getUserId,EditUser,DeleteUser,AddUser};