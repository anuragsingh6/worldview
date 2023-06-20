import { Link } from "react-router-dom";

function Navbar(props:any){

    return (
        <>
        <div id="navbar" className={`${props.theme}`}>
            <Link to="/"><div id="logo" className={`${props.theme}`}>Worldview</div></Link>
            <div className="search">
                <input id="navbarsearch" className={`${props.theme}`} placeholder="Search" onChange={(e)=>{props.setSearchQuery(e.target.value)}}/>
                <Link to={props.searchQuery ? `/search` : "/"}><button className={`search-button ${props.theme}`} onClick={props.Search}>Search</button></Link>
            </div>
            <div className="uimode"><button type="button" className="mode-button" onClick={props.toggleTheme}>{props.theme ==="light"?"Dark":"Light"} Mode</button></div>
            <div className="uilogger">
                <Link to="/login"><div id="uilogger-login" className={`${props.theme}`} style={{marginRight:"1vw"}}>Log In</div></Link>
                <Link to="/signup"><div id="uilogger-signup" className={`${props.theme}`} style={{marginLeft:"1vw"}}>Sign Up</div></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar