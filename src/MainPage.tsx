import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SuggestedVideo from "./SuggestedVideo";

function MainPage(props:any){
    const dataFetched = useRef(false);
    let videoData:any;let [videosLoaded,setVideosLoaded]=useState(false);
    useEffect(
        ()=>{document.title="Worldview";
        if (dataFetched.current) return;
        dataFetched.current = true;
        fetchSuggestedVideos()},[])

    async function fetchSuggestedVideos(){
        console.log(videosLoaded);
        let rawData = await fetch("https://youtube-browser-api.netlify.app/data/suggestion?limit=3");
        videoData = await rawData.json();
        console.log("0:",videoData.items[0],"\n\n1:",videoData.items[1],"\n\n2:",videoData.items[2]);
        setVideosLoaded(true);console.log(videosLoaded);
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
                {!videosLoaded||<div className="div3-bottom-videos">
                    {/* {<div>Loading...</div>||<SuggestedVideo videoId={videoData?.items["0"].id} />} */}
                    <SuggestedVideo videoId={videoData?.items["0"].id} />
                    <SuggestedVideo videoId={videoData?.items["1"].id} />
                    <SuggestedVideo videoId={videoData?.items["2"].id} />
                </div>}
            </div>
            <div id="footer" className={`${props.theme}`}>
                &copy; Anurag Singh. All rights reserved.
            </div>
        </div>
    )
}

export default MainPage