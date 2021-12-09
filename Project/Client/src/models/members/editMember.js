import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";

function EditMember(props)
{
    const navigate =  useNavigate();
    
    const params = useParams();
    
    const [member,setMember]= useState({name: "", id: "", email: "", city: ""});

    useEffect(async()=>
    {
        if(props.props.name!= "admin")
        {   
            if((Date.now()-props.props.time) >= props.props.timeOut) // check if time over
            {
                alert("YOUR TIME IS UP!!");
                navigate("/");
            }
        }

        let resp= await axios.get('http://localhost:7000/data/editMember/'+ params.id);
       
        setMember({name: resp.data.Name, id: resp.data._id, email: resp.data.Email, city: resp.data.City});
    },[]);

    const send= async(x)=>
    {
        if(x==1)
        {
            if(member.name!= '' && member.email!='' && member.city!= '')
            {
                await axios.post('http://localhost:7000/data/updateMember', member);

                navigate('/main/subscriptions'); 
            }

            else
            alert("YOU MUST FILL ALL THE FORM!!");
        }

        if(x==2)
        navigate('/main/subscriptions'); 
    }

    return(<div>

        <h2>Edit Member Page</h2>

        Enter the name of the member: <input type="text" value={member.name} onChange={e=> setMember({...member, name: e.target.value})}/><br/><br/>

        Enter the member's email: <input type="email" value={member.email} onChange={e=> setMember({...member, email: e.target.value})}/><br/><br/>

        Enter the member's city: <input type="text" value={member.city} onChange={e=> setMember({...member, city: e.target.value})}/><br/><br/>

        <input type="button" value="Update" onClick={()=> send(1)} style={{cursor: "pointer"}}/> 
        <input type="button" value="Cancel" onClick={()=> send(2)} style={{cursor: "pointer"}}/>

    </div>)
}

export default EditMember;