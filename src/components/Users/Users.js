import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users,setUser]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    //delete user from ui and server
    const deleteUser = (id)=>{
        // console.log(id);
        const procced = window.confirm("Are sure to delete this user?")
        if(procced){
            const url = `http://localhost:5000/users/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.deletedCount > 0){
                alert("deleted successfully")
            }
            //handle delete from ui without reload page
            const remainingUsers = users.filter(user=>user._id !== id);
            setUser(remainingUsers);
        })
        }

    }
    return (
        <div>
            <h1>Users Available : {users.length}</h1>
            {
                users.map(user=><li>{user.name} :: {user.email} :: {user.phone}
                <button onClick={()=>deleteUser(user._id)}>X</button>
                <button>update</button>
                </li>)
            }
        </div>
    );
};

export default Users;