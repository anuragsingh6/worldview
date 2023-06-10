import { useEffect } from "react";
import { Link } from "react-router-dom"

function SignupPage(){

    useEffect(()=>{
        document.title="Sign Up | Worldview";
    },[])

    return (
        <div className="signuppage">
            <div className="signuppage-container">
                <form className="signupform">
                    <div className="signupheading">Sign Up</div>
                    <input className="signupinput" placeholder="Name" type="text" />
                    <input className="signupinput" placeholder="Email" type="text" />
                    <input className="signupinput" placeholder="Password" type="password" />
                    <button className="signupbutton" type="submit">Sign Up</button>
                    <small className="loginsignup">Already have an account? <Link to="/login"><div style={{whiteSpace:"nowrap",color:"brown"}}>Log In</div></Link></small>
                </form>
            </div>
        </div>
    )
}

export default SignupPage