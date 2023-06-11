import { useEffect } from "react"
import { Link } from "react-router-dom"

function LoginPage(props:any){
    useEffect(()=>{document.title="Log In | Worldview";},[])
    return (
        <div id="loginpage" className={`${props.theme}`}>
            <div id="loginpage-container">
                <form id="loginform">
                    <div id="loginheading">Log In</div>
                    <input className={`${props.theme} logininput`} placeholder="Name" type="text" />
                    <input className={`${props.theme} logininput`} placeholder="Email" type="text" />
                    <input className={`${props.theme} logininput`} placeholder="Password" type="password" />
                    <button id="loginbutton" type="submit">Log In</button>
                    <small id="loginsignup" className={`${props.theme}`}>Don't have an account? <Link to="/signup"><div className={`loginsignupinterchange ${props.theme}`}>Sign Up</div></Link></small>
                </form>
            </div>
        </div>
    )
}

export default LoginPage