import { useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage(props:any){
    useEffect(()=>{document.title="Worldview"},[])
    return (
        <div className="mainpage">
            <div id="div1" className={`${props.theme}`}>
                <div className={`div1-left ${props.theme}`}>
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
                    <div id="div1-imagecover" className={`${props.theme}`}></div>
                </div>
            </div>
            <div id="div2" className={`${props.theme}`}>
                <div className="div2-topimage"></div>
                <div className="div2-bottomcontent">A new <strong>perspective</strong> of seeing the world <strong>unbiased</strong>, without putting your <strong>privacy</strong> at stake</div>
            </div>
            <div id="div3" className={`${props.theme}`}>

            </div>
            <div id="footer" className={`${props.theme}`}>
                &copy; Anurag Singh. All rights reserved.
            </div>
        </div>
    )
}

export default MainPage