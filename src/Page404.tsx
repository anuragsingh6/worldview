import { useEffect } from "react";
import { Link } from "react-router-dom";

function Page404(props:any){
    useEffect(()=>{document.title="Page Not Found | Worldview"},[])
    return (
        <div className={`page404 ${props.theme}`}>
            <div className="page404container">
                <div className="page404image"></div>
                <strong className="page404text" style={{fontSize:"1.5em"}}>Error</strong>
                <em className="page404text">Page Not Found</em>
                <div className="page404text">
                    <Link to="/"><div className={`page404-gohome ${props.theme}`}>Go Home&nbsp;</div></Link>&nbsp;or Search For Something Instead
                </div>
            </div>
        </div>
    )
}

export default Page404