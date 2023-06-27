import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function SignupPage(props:any){
    useEffect(()=>{document.title="Sign Up | Worldview";},[]);let navigateTo=useNavigate();

    let [signup_username,setSignup_username]=useState("");let [signup_useremail,setSignup_useremail]=useState("");let [signup_userpassword,setSignup_userpassword]=useState("");

    function signupHandler(name:string,email:string,pswd:string){
        if (localStorage.getItem("worldviewAccountCreated")=="true"){alert("Account already exists. Please Log In instead.");return;
        }
        else{
            localStorage.setItem("worldviewUsername",name);localStorage.setItem("worldviewEmail",email);localStorage.setItem("worldviewPassword",pswd);
            if(props.validateAccountDetails(name,email,pswd)){
                console.log("from SignupPage.tsx :  ","accountExists",localStorage.getItem("worldviewAccountCreated"),typeof(localStorage.getItem("worldviewAccountCreated")));
                props.setAccountExists("true");localStorage.setItem("worldviewAccountCreated","true");
                console.log("from SignupPage.tsx :  ","accountExists",localStorage.getItem("worldviewAccountCreated"),typeof(localStorage.getItem("worldviewAccountCreated")));
                console.log(localStorage);
                props.accountHandler();navigateTo("/");
            }
        }
    }

    return (
        <div id="signuppage" className={`${props.theme}`}>
            <div id="signuppage-container">
                {props.accountExists==="true"?<div style={{padding:"5%",color:"yellow",border:"0.3vw solid yellow",borderRadius:"2vw"}}>Already Signed Up and Logged In</div>
                :<form id="signupform">
                    <div id="signupheading">Sign Up</div>
                    <input className={`${props.theme} signupinput`} placeholder="Name" type="text" onChange={(e)=>setSignup_username(e.target.value)} />
                    <input className={`${props.theme} signupinput`} placeholder="Email" type="text" onChange={(e)=>setSignup_useremail(e.target.value)} />
                    <input className={`${props.theme} signupinput`} placeholder="Password" type="password" onChange={(e)=>setSignup_userpassword(e.target.value)} />
                    <button id="signupbutton" type="button" onClick={()=>signupHandler(signup_username,signup_useremail,signup_userpassword)}>Sign Up</button>
                    <small id="loginsignup" className={`${props.theme}`}>Already have an account? <Link to="/login"><div className={`loginsignupinterchange ${props.theme}`}>Log In</div></Link></small>
                </form>}
            </div>
        </div>
    )
}

export default SignupPage