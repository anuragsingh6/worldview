import { useEffect, useState } from "react";
import SuggestedVideo from "./SuggestedVideo";
import { Link } from "react-router-dom";

function VideoPage(props:any){

    useEffect(()=>{document.title=props.data ? `${props.data.title} | Worldview` : "Videos | Worldview";fetchSuggestedVideos();},[])
    let path=document.location.pathname;
    useEffect(()=>{console.log(path, typeof(path))},[path])

    let [videoPageSuggestions,setvideoPageSuggestions]=useState<any>();
    async function fetchSuggestedVideos(){
        try{
            let rawData = await fetch("https://youtube-browser-api.netlify.app/data/suggestion?limit=12");
            let rawDataJSON = await rawData.json();
            setvideoPageSuggestions(rawDataJSON);
            console.log(rawDataJSON);
        }
        catch{
            setTimeout(fetchSuggestedVideos,3000);
        }
    }

    return (
        <div className={`videopage ${props.theme}`}>
        {path.includes('videos') ?
            <div className="main-videopage">
                <h2 style={{textAlign:"center"}}>Videos</h2>
                {videoPageSuggestions?
                <div className="videopage-main-container">
                    <div style={{height:"5vh",width:"100%",margin:"3% 0%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <button className="search-result-sort-option-button" style={{cursor:"pointer"}} onClick={()=>fetchSuggestedVideos()}>Refresh</button>
                    </div>
                    <div className="videopage-all-videos">
                        <div className="videopage-all-videos-row">
                            <Link to={`/video/${videoPageSuggestions.items[0].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[0]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[1].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[1]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[2].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[2]} /></Link>
                        </div>
                        <div className="videopage-all-videos-row">
                            <Link to={`/video/${videoPageSuggestions.items[3].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[3]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[4].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[4]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[5].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[5]} /></Link>
                        </div>
                        <div className="videopage-all-videos-row">
                            <Link to={`/video/${videoPageSuggestions.items[6].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[6]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[7].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[7]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[8].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[8]} /></Link>
                        </div>
                        <div className="videopage-all-videos-row">
                            <Link to={`/video/${videoPageSuggestions.items[9].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[9]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[10].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[10]} /></Link>
                            <Link to={`/video/${videoPageSuggestions.items[11].id}`}><SuggestedVideo theme={props.theme} videoData={videoPageSuggestions.items[11]} /></Link>
                        </div>
                    </div>
                    
                </div>:
                <div>Loading...</div>
                }
            </div>
         :<div className="select-videopage">
            <h2>{String(props.data) || String(videoPageSuggestions)}</h2>

         </div>
        }
        </div>
    )
}

export default VideoPage