import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function SignupPage(props:any){
    useEffect(()=>{document.title="Sign Up | Worldview";},[]);

    let [signup_username,setSignup_username]=useState("");let [signup_useremail,setSignup_useremail]=useState("");let [signup_userpassword,setSignup_userpassword]=useState("");

    function signupHandler(name:string,email:string,pswd:string){

        if((localStorage.getItem("worldviewUsername")===name)&&(localStorage.getItem("worldviewEmail")===email)&&(localStorage.getItem("worldviewPassword")===pswd)){
            alert("Account already exists. Please Log In instead.");
        }
        else{
            localStorage.setItem("worldviewUsername",name);
            localStorage.setItem("worldviewEmail",email);
            localStorage.setItem("worldviewPassword",pswd);
            switch(props.validateAccountDetails(name,email,pswd)){
                case "N_ERR":alert("Please Enter Your Name");break;
                case "E_EMPTY":alert("Please Enter Your Email");break;
                case "E_ERR":alert("Invalid email");break;
                case "P_ERR":alert("Please Enter a Password");break;
                case "P_SHORT":alert("Please Enter a Longer Password");break;
                default:localStorage.setItem("worldviewAccountCreated","true");props.accountHandler();
            }
        }
    }

    return (
        <div id="signuppage" className={`${props.theme}`}>
            <div id="signuppage-container">
                <form id="signupform">
                    <div id="signupheading">Sign Up</div>
                    <input className={`${props.theme} signupinput`} placeholder="Name" type="text" onChange={(e)=>setSignup_username(e.target.value)} />
                    <input className={`${props.theme} signupinput`} placeholder="Email" type="text" onChange={(e)=>setSignup_useremail(e.target.value)} />
                    <input className={`${props.theme} signupinput`} placeholder="Password" type="password" onChange={(e)=>setSignup_userpassword(e.target.value)} />
                    <button id="signupbutton" type="button" onClick={()=>signupHandler(signup_username,signup_useremail,signup_userpassword)}>Sign Up</button>
                    <small id="loginsignup" className={`${props.theme}`}>Already have an account? <Link to="/login"><div className={`loginsignupinterchange ${props.theme}`}>Log In</div></Link></small>
                </form>
            </div>
        </div>
    )
}

export default SignupPage