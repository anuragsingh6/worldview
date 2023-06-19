import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuggestedVideo from "./SuggestedVideo";

function MainPage(props:any){
    let [videoData,setVideoData]=useState({items:{0:{id:""},1:{id:""},2:{id:""}}});
    useEffect(
        ()=>{document.title="Worldview";
        fetchSuggestedVideos();},[])

    async function fetchSuggestedVideos(){
        let rawData = await fetch("https://youtube-browser-api.netlify.app/data/suggestion?limit=3");
        let rawDataJSON = await rawData.json();
        setVideoData(rawDataJSON);
    }

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
                <div className="div2-top-image"></div>
                <div className="div2-bottom-content">A new <strong>perspective</strong> of seeing the world <strong>unbiased</strong>, without putting your <strong>privacy</strong> at stake</div>
            </div>
            <div id="div3" className={`${props.theme}`}>
                <div className={`div3-top-heading ${props.theme}`}>Few random places for you to start from...</div>
                {videoData ? <div className="div3-bottom-videos">
                    <SuggestedVideo videoId={videoData.items["0"].id} />
                    <SuggestedVideo videoId={videoData.items["1"].id} />
                    <SuggestedVideo videoId={videoData.items["2"].id} />
                </div> : <div className={`div3-suggested-videos-loading ${props.theme}`}>Loading...</div>}
            </div>
            <div id="footer" className={`${props.theme}`}>
                <a href="https://www.github.com/anuragsingh6/worldview" className={props.theme}>Report a bug</a><br />
                &copy; Anurag Singh. All rights reserved.
            </div>
        </div>
    )
}

export default MainPage