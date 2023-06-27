import { useEffect, useState } from "react";
import SuggestedVideo from "./SuggestedVideo";
import { Link, useLocation } from "react-router-dom";

function IndividualVideoPage(props:any){
    let [currentVideoData,setCurrentVideoData]=useState<any>();
    let [completeDescription,setCompleteDescription]=useState(false);
    let [moreVideosData,setMoreVideosData]=useState<any>();

    useEffect(()=>{document.title=currentVideoData?`${currentVideoData.title} | Worldview`:"Worldview";},[currentVideoData]);
    useEffect(()=>{fetchVideoData();fetchMoreVideos();},[useLocation().pathname.substring(17)]);

    async function fetchVideoData(){
        try{
            let rawVideoData=await fetch(`https://youtube-browser-api.netlify.app/content?id=${document.location.pathname.substring(17)}&params=title,channel,description`);
            let videoDataJSON=await rawVideoData.json();
            if (videoDataJSON.hasOwnProperty("message")){setCurrentVideoData({title:"Error loading title",channel:"Server",description:"Error loading description."});}
            else{setCurrentVideoData(videoDataJSON);};
        }
        catch{setTimeout(fetchVideoData,3000);}
    }

    async function fetchMoreVideos(){
        try{
            let rawMoreVideosData=await fetch("https://youtube-browser-api.netlify.app/data/suggestion?limit=3");
            let moreVideosDataJSON=await rawMoreVideosData.json();
            setMoreVideosData(moreVideosDataJSON);
        }
        catch{setTimeout(fetchMoreVideos,3000);}
    }

    return (
        <div className={`individualvideopage ${props.theme}`}>
            {currentVideoData?
            <div className="individualvideopage-main-container">
                <h1>{currentVideoData.title}</h1>
                <div className="individualvideopage-mainvideo-container">
                    <div className="individualvideopage-mainvideo">
                        <iframe src={`https://www.youtube.com/embed/${document.location.pathname.substring(17)}`} height={"100%"} width={"100%"} frameBorder={"0"}></iframe>
                    </div>
                    <div className="individualvideopage-mainvideo-information-container">
                        <div className="individualvideopage-mainvideo-channel">by {currentVideoData.channel}</div>
                        <div className="individualvideopage-mainvideo-description">{completeDescription===true?currentVideoData.description:currentVideoData.description.substring(0,100)+"..."}</div>
                        <button className="search-result-sort-option-button individualvideopage-show-more-description-button" onClick={()=>{setCompleteDescription(!completeDescription);}}>Show {completeDescription?"Less":"More"}</button>
                    </div>
                </div>
                <div className="individualvideopage-more-videos-header">
                    <h2 style={{marginRight:"5%"}}>More Videos</h2>
                    <button className="search-result-sort-option-button individualvideopage-show-more-description-button" style={{marginRight:"5%"}} onClick={()=>{fetchMoreVideos();}}>Refresh</button>
                    <Link to="/videos/"><button className="search-result-sort-option-button individualvideopage-show-more-description-button" style={{height:"100%",width:"100%",padding:"5% 10%"}}>Go to Videos</button></Link>
                </div>
                <div className="individualvideopage-more-videos-container">
                    {moreVideosData?<div className={`individualvideopage-more-videos ${props.theme}`}>
                        <SuggestedVideo theme={props.theme} videoData={moreVideosData.items[0]} />
                        <SuggestedVideo theme={props.theme} videoData={moreVideosData.items[1]} />
                        <SuggestedVideo theme={props.theme} videoData={moreVideosData.items[2]} />
                    </div>
                    :<h2>Loading...</h2>}
                    
                </div>
            </div>
            :<h1>Loading...</h1>}
        </div>
    )
}

export default IndividualVideoPage