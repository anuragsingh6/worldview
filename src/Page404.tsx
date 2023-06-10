import { Link } from "react-router-dom";

function Page404(){
    return (
        <div className="page404">
            <div className="page404container">
                <div className="page404image"></div>
                <strong className="page404text" style={{fontSize:"1.5em"}}>Error</strong>
                <em className="page404text">Page Not Found</em>
                <div className="page404text">
                    <Link to="/"><div style={{padding:"2%",border:"0.1vw solid black",whiteSpace:"nowrap"}}>Go Home&nbsp;</div></Link>&nbsp;or Search For Something Instead
                </div>
            </div>
        </div>
    )
}

export default Page404