import { useEffect } from "react";
import { Link } from "react-router-dom"

function SignupPage(props:any){
    useEffect(()=>{document.title="Sign Up | Worldview";},[])
    return (
        <div id="signuppage" className={`${props.theme}`}>
            <div id="signuppage-container">
                <form id="signupform">
                    <div id="signupheading">Sign Up</div>
                    <input className={`${props.theme} signupinput`} placeholder="Name" type="text" />
                    <input className={`${props.theme} signupinput`} placeholder="Email" type="text" />
                    <input className={`${props.theme} signupinput`} placeholder="Password" type="password" />
                    <button id="signupbutton" type="submit">Sign Up</button>
                    <small id="loginsignup" className={`${props.theme}`}>Already have an account? <Link to="/login"><div className={`loginsignupinterchange ${props.theme}`}>Log In</div></Link></small>
                </form>
            </div>
        </div>
    )
}

export default SignupPage