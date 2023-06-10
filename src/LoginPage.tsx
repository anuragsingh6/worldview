import { useEffect } from "react"
import { Link } from "react-router-dom"

function LoginPage(){

    useEffect(()=>{
        document.title="Log In | Worldview";
    },[])

    return (
        <div className="loginpage">
            <div className="loginpage-container">
                <form className="loginform">
                    <div className="loginheading">Log In</div>
                    <input className="logininput" placeholder="Name" type="text" />
                    <input className="logininput" placeholder="Email" type="text" />
                    <input className="logininput" placeholder="Password" type="password" />
                    <button className="loginbutton" type="submit">Log In</button>
                    <small className="loginsignup">Don't have an account? <Link to="/signup"><div style={{whiteSpace:"nowrap",color:"brown"}}>Sign Up</div></Link></small>
                </form>
            </div>
        </div>
    )
}

export default LoginPage