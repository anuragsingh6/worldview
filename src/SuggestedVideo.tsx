function SuggestedVideo(props:any){

    return (
        <div className="suggested-video">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder={"0"}></iframe>
        </div>
    )
    
}
export default SuggestedVideo