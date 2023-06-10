import { Link } from "react-router-dom";

function MainPage(){
    return (
        <div className="mainpage">
            <div className="div1">
                <div className="div1-left">
                    <div className="div1-left-topcontent">
                        <div className="div1-left-heading">Discover the latest trends.</div>
                        <div className="div1-left-content">See what's going on in the world.</div>
                    </div>
                    <div className="div1-left-buttoncontainer">
                        <Link to="/login"><button type="button" className="main-button">Log In</button></Link>
                        <Link to="/signup"><button type="button" className="main-button">Sign Up</button></Link>
                    </div>
                </div>
                <div className="div1-right">
                    <div className="div1-image" style={{animation:"2s ease-in",animationDelay:"3s",animationFillMode:"backwards"}}></div>
                    <div className="div1-imagecover"></div>
                </div>
            </div>
            <div className="div2">

            </div>
        </div>
    )
}

export default MainPage