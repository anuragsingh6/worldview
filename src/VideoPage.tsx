import { useEffect, useState } from "react";
import SuggestedVideo from "./SuggestedVideo";

function VideoPage(props:any){

    useEffect(()=>{document.title=props.data ? `${props.data.title} | Worldview` : "Videos | Worldview";fetchSuggestedVideos();},[])

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
            <h2 style={{textAlign:"center"}}>Videos</h2>
            {videoPageSuggestions?
            <div className="videopage-main-container">
                <div className="videopage-all-videos">
                    <div className="videopage-all-videos-row">
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[0].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[1].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[2].id} /></div>
                    </div>
                    <div className="videopage-all-videos-row">
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[3].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[4].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[5].id} /></div>
                    </div>
                    <div className="videopage-all-videos-row">
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[6].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[7].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[8].id} /></div>
                    </div>
                    <div className="videopage-all-videos-row">
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[9].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[10].id} /></div>
                        <div className="videopage-video-container"><SuggestedVideo videoId={videoPageSuggestions.items[11].id} /></div>
                    </div>
                </div>
                <div style={{height:"5vh",width:"100%",margin:"3% 0%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <button className="search-result-sort-option-button" style={{cursor:"pointer"}} onClick={()=>{}}>Load More</button>
                </div>
            </div>:
            <div>Loading...</div>
            }
        </div>
    )
}

export default VideoPage