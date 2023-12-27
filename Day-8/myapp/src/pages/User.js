import { useState, useEffect } from 'react';
import { getUser,DeleteUser } from '../Services/API';
import { navigate, useNavigate } from 'react-router-dom';
function User() {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const fetchdata = async () => {
        try {
            const res = await getUser()
            setUser(res.data);
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleDelete= async(id)=>{
        try{
            const res =  await DeleteUser(id);
            if(res.status===200){
                alert('deteted')
            }
            fetchdata()
        }
        catch(e){
            console.log(e);
        }
    }
    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (<>
        <h1>EditUser</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th>
                        password
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {user.map((user) => (
                        <tr key={user.id}>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.password}
                            </td>
                            <td>
                                <button className='del-btn' onClick={()=>handleEdit(user.id)}>Edit</button>
                            </td>
                            <td>
                                <button className='edit-btn' onClick={()=>handleDelete(user.id)}> delete </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}
export default User;