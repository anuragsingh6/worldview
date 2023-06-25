import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function ChannelPage(props:any){
    let [channelData,setChannelData]=useState<any>();
    let channelName=channelData?channelData[0].content.sectionListRenderer.contents[3||1].itemSectionRenderer.contents[0].shelfRenderer.endpoint.browseEndpoint.canonicalBaseUrl.substring(2):"";

    useEffect(()=>{document.title=channelData ? `Channel "${channelName}" | Worldview` : "Channel | Worldview"},[channelData]);
    useEffect(()=>{fetchChannelData();},[useLocation().pathname.substring(9)]);

    async function fetchChannelData(){
        console.log("fetchChannelData called");
        try{
            let rawChannelData=await fetch(`https://youtube-browser-api.netlify.app/data/channel?channelId=${document.location.pathname.substring(9)}`);
            let channelDataJSON=await rawChannelData.json();
            setChannelData(channelDataJSON);
            console.log("channelDataJSON:",channelDataJSON);
        }
        catch{setTimeout(fetchChannelData,3000);}
    }

    return (
        <div className={`channelpage ${props.theme}`}>
            {channelData?
            <div className="channelpage-main-container">
                <h1 style={{width:"100%",textAlign:"left"}}>{channelName}</h1>
                <div className="channelpage-icon-about-container">
                    <div className="channelpage-icon-container"></div>
                    <div className="channelpage-about-container"></div>
                </div>
            </div>
            :<h2>Loading...</h2>}
        </div>
    )
}

export default ChannelPage