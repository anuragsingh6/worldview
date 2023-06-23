import { Link } from "react-router-dom";

function SuggestedVideo(props:any){
    return (
        <Link to={`/video/${props.videoData.id}`}>
            <div className={`suggested-video ${props.theme}`}>
                <div className="suggested-video-top" style={{backgroundImage:`url(${props.videoData.thumbnail.thumbnails[0].url})`}}></div>
                <div className="suggested-video-bottom">{props.videoData.title}</div>
            </div>
        </Link>
    )
}
export default SuggestedVideo