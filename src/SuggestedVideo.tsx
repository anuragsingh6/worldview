function SuggestedVideo(props:any){
    return (
        <div className="suggested-video">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder={"0"}></iframe>
            {/* <iframe width="100%" height="5%" src="https://www.youtube.com/embed/kiyi-C7NQrQ" frameBorder={"0"}></iframe> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kiyi-C7NQrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

            {/* <video tabindex="-1" class="video-stream html5-main-video" webkit-playsinline="" playsinline="" controlslist="nodownload" style="width: 247px; height: 139px; left: 8px; top: 0px;"></video> */}
        </div>
    )
    
}
export default SuggestedVideo