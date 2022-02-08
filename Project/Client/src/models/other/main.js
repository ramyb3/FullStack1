import { Link, Outlet } from "react-router-dom";

function Main(props)
{
    const reset = ()=>
    {
        props.callback([]);
    }

    return(<div >

        <big><b style={{color: 'rgb(69, 78, 208)'}}> Connected User: {props.props.name} </b></big><br/><br/>
 
        {props.props.perm.includes("View Movies") ?

            <Link to="movies"><input type="button" value="Movies" className="button"/></Link> : null
        }&nbsp;

        {props.props.perm.includes("View Subscriptions") ?  
            
            <Link to="subscriptions"><input type="button" value="Subscriptions" className="button"/></Link> : null
        }&nbsp;

        {props.props.name=="admin" ? 

            <Link to="manageUsers"><input type="button" value="Users Management" className="button"/></Link> : null
        }&nbsp;

        <Link to="/"><input type="button" value="Logout" onClick={reset} className="button"/></Link> <br/>
        
        <Outlet />

    </div>)
}

export default Main;
