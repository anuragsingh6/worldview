import { Link } from "react-router-dom";

function Navbar(props:any){
        let accountDialog=document.getElementById("accountDialog") as HTMLDialogElement;

    function showAccountOptions(): void{
        accountDialog.showModal();
        accountDialog.addEventListener("click",(e)=>{if (e.clientX>accountDialog.getBoundingClientRect().right||e.clientX<accountDialog.getBoundingClientRect().left||e.clientY>accountDialog.getBoundingClientRect().bottom||e.clientY<accountDialog.getBoundingClientRect().top){accountDialog.close();}});
    }

    return (
        <>
        <div id="navbar" className={`${props.theme}`}>
            <Link to="/"><div id="logo" className={`${props.theme}`}>Worldview</div></Link>
            <div className="search">
                <input id="navbarsearch" className={`${props.theme}`} placeholder="Search" onChange={(e)=>{props.setSearchQuery(e.target.value)}}/>
                <Link to={props.searchQuery ? `/search/${props.searchQuery}` : document.location.pathname}><button className={`search-button ${props.theme}`} onClick={()=>{props.Search();props.setSearchData(null);}}>Search</button></Link>
            </div>
            <div className="uimode"><button type="button" className="mode-button" onClick={props.toggleTheme}>{props.theme ==="light"?"Dark":"Light"} Mode</button></div>
            <div className="uilogger">
                {props.accountExists==="false"||props.accountExists===null?<div style={{height:"100%",width:"100%",display:"flex"}}>
                    <Link to="/login"><div id="uilogger-login" className={`${props.theme}`} style={{marginRight:"1vw"}}>Log In</div></Link>
                    <Link to="/signup"><div id="uilogger-signup" className={`${props.theme}`} style={{marginLeft:"1vw"}}>Sign Up</div></Link>
                </div>
                :<div className={`uilogger-username ${props.theme}`} onClick={()=>showAccountOptions()}>{props.account["worldviewUsername"]}</div>}
            </div>
            <dialog id="accountDialog" className={props.theme} style={{height:"50%",width:"50%",padding:"5%",border:"none",borderRadius:"2vw"}}>
                <h2>Account Options</h2>
                <div style={{padding:"5% 2%"}}>
                    <h3>Delete Account</h3>
                    <button className="search-result-sort-option-button" style={{height:"auto",width:"auto",padding:"2%"}} onClick={()=>{props.deleteAccount();accountDialog.close();}}>Delete Account</button>
                    <div style={{padding:"1% 0% 2% 0%"}}><strong>This action cannot be undone</strong></div>
                </div>
                <button className="search-result-sort-option-button" style={{height:"auto",width:"50%",padding:"2%"}} onClick={()=>{accountDialog.close();}}>Close</button>
            </dialog>
        </div>
        </>
    )
}

export default Navbar