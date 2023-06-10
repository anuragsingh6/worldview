import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    // const [theme, setTheme] = useContext("light");
    return (
        <>
        <div className="navbar">
            <Link to="/"><div className="logo">Worldview</div></Link>
            <div className="search"><input className="navbarsearch" placeholder="Search"/></div>
            <div className="uimode">Mode</div>
            <div className="uilogger">
                <Link to="/login"><div className="uilogger_login" style={{marginRight:"1vw"}}>Log In</div></Link>
                <Link to="/signup"><div className="uilogger_signup" style={{marginLeft:"1vw"}}>Sign Up</div></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar