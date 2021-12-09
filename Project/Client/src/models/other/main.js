import { Link, Outlet } from "react-router-dom";

function Main(props)
{
    const reset = ()=>
    {
        props.callback([]);
    }

    return(<div >

        <big><b> Connected User: {props.props.name}  </b></big><br/><br/>
 
        {props.props.perm.includes("View Movies") ?

            <Link to="movies"><input type="button" value="Movies" style={{cursor: "pointer"}}/></Link> : null
        }&nbsp;

        {props.props.perm.includes("View Subscriptions") ?  
            
            <Link to="subscriptions"><input type="button" value="Subscriptions" style={{cursor: "pointer"}}/></Link> : null
        }&nbsp;

        {props.props.name=="admin" ? 

            <Link to="manageUsers"><input type="button" value="Users Management" style={{cursor: "pointer"}}/></Link> : null
        }&nbsp;

        <Link to="/"><input type="button" value="Logout" onClick={reset} style={{cursor: "pointer"}}/></Link> <br/>
        
        <Outlet />

    </div>)
}

export default Main;