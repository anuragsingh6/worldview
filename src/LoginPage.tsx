import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function LoginPage(props:any){
    useEffect(()=>{document.title="Log In | Worldview";},[]);

    let [login_username,setLogin_username]=useState("");let [login_useremail,setLogin_useremail]=useState("");let [login_userpassword,setLogin_userpassword]=useState("");

    function loginHandler(name:string,email:string,pswd:string){
        if(localStorage.getItem("worldviewAccountCreated")==="false"){alert("Account does not exist. Please Sign Up first.");return;}
        else{
            if ((localStorage.getItem("worldviewUsername")===name)&&(localStorage.getItem("worldviewEmail")===email)&&(localStorage.getItem("worldviewPassword")===pswd)){
                props.validateAccountDetails();props.accountHandler();
            }
        }
    }

    return (
        <div id="loginpage" className={`${props.theme}`}>
            <div id="loginpage-container">
                {props.accountExists==="true"?<div style={{padding:"5%",color:"yellow",border:"0.3vw solid yellow",borderRadius:"2vw"}}>Already Logged In</div>
                :<form id="loginform">
                    <div id="loginheading">Log In</div>
                    <input className={`${props.theme} logininput`} placeholder="Name" type="text" onChange={(e)=>setLogin_username(e.target.value)} />
                    <input className={`${props.theme} logininput`} placeholder="Email" type="text" onChange={(e)=>setLogin_useremail(e.target.value)} />
                    <input className={`${props.theme} logininput`} placeholder="Password" type="password" onChange={(e)=>setLogin_userpassword(e.target.value)} />
                    <button id="loginbutton" type="button" onClick={()=>{loginHandler(login_username,login_useremail,login_userpassword)}}>Log In</button>
                    <small id="loginsignup" className={`${props.theme}`}>Don't have an account? <Link to="/signup"><div className={`loginsignupinterchange ${props.theme}`}>Sign Up</div></Link></small>
                </form>}
            </div>
        </div>
    )
}

export default LoginPage