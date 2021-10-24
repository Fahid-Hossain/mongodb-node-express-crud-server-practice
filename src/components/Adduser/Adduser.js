import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    
    // form submit handler 
    const addUserHandler = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        const newUser = {name:name,email:email,phone:phone}

        console.log(newUser);

        // post on server
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                alert("successfully added user")
                e.target.reset();
            }
        })
    }

    return (
        <div>
            <h1>Add User you want</h1>
            <form onSubmit={addUserHandler}>
                <input ref={nameRef} type="text" placeholder="your name" />
                <input ref={emailRef} type="email" placeholder="your email" />
                <input ref={phoneRef} type="text" placeholder="your phone no" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;