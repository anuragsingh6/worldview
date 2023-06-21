import { Link } from "react-router-dom";
function SearchVideo(props:any){
    let thumbnailURL=props.videoData.thumbnail.thumbnails[0].url;

    return (
        <Link to={props.videoData.length ? `/video/${props.videoData.id}`:`/channel/${props.videoData.id}`} className="search-video-link">
        <div className="search-video">
            <div className="search-video-image" style={{backgroundImage:`url(${thumbnailURL})`,borderRadius:!props.videoData.length?"20vw":"1vh"}}></div>
            <div className="search-video-div1">
                <div className="search-video-title">{props.videoData.title}</div>
                <div className="search-video-length" style={{paddingTop:"2%"}}>{props.videoData.length ? props.videoData.length.simpleText : "Channel"}</div>
                <div className="search-video-channel" style={{paddingTop:"2%"}}>{props.videoData.channelTitle}</div>
            </div>
        </div>
        </Link>
    )
}

export default SearchVideo