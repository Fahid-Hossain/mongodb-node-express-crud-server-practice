import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users,setUser]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h1>Users Available : {users.length}</h1>
            {
                users.map(user=><li>{user.name} :: {user.email} :: {user.phone}
                 
                </li>)
            }
        </div>
    );
};

export default Users;