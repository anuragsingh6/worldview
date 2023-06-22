function SuggestedVideo(props:any){

    return (
        <div className={`suggested-video ${props.theme}`}>
            {/* <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder={"0"}></iframe> */}
            {/* <div ></div> */}
            <div className="suggested-video-top" style={{backgroundImage:`url(${props.videoData.thumbnail.thumbnails[0].url})`}}></div>
            <div className="suggested-video-bottom">{props.videoData.title}</div>
        </div>
    )
    
}
export default SuggestedVideo