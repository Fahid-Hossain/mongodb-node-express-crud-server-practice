import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Updateuser = () => {
    const {id}=useParams();
    //load user single iitem by id and display
    const [user,setUser]=useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setUser(data);
        })
    },[])
    return (
        <div>
            <h1>Update user :: {user.name} :: {user.email} :: {user.phone}</h1>
        </div>
    );
};

export default Updateuser;