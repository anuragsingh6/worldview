function SearchVideo(props:any){
    let thumbnailURL=props.videoData.thumbnail.thumbnails[0].url;

    return (
        <div className="search-video">
            <div className="search-video-image" style={{backgroundImage:`url(${thumbnailURL})`}}></div>
            <div className="search-video-div1">
                <div className="search-video-title">{props.videoData.title}</div>
                <div className="search-video-div2">
                    <div className="search-video-length">{props.videoData.length.simpleText}</div>
                    <div className="search-video-channel">{props.videoData.channelTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default SearchVideo