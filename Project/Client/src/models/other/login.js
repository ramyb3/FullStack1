import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login(props)
{
    const navigate =  useNavigate();

    const [user,setUser]= useState({user:'', psw: ''});

    const send= async()=>
    {
        let resp= await axios.post('http://localhost:7000/data/main', user);

        if(resp.data=="THE USERNAME OR PASSWORD IS INCORRECT!!")
        alert(resp.data);

        else
        {
            props.send(resp.data);

            navigate('/main'); //to main
        }
    }

    return(<div>

        <h2>Login Page</h2>
                   
        User Name: <input type="text" onChange={e=> setUser({...user, user: e.target.value})} /><br/><br/>
        Password: <input type="password" onChange={e=> setUser({...user, psw: e.target.value})}/><br/><br/>
        <input type="button" value="Login" onClick={send} style={{cursor: "pointer"}}/><br/><br/>

        <Link to="/create">CLICK ME IF YOU A NEW USER</Link> <br/>

    </div>)
}

export default Login;