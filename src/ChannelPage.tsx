import { useEffect } from "react"

function ChannelPage(props:any){

    useEffect(()=>{document.title=props.data ? `${props.data.title} | Worldview` : "Channel | Worldview"},[])

    return (
        <div className={`channelpage ${props.theme}`}>

        </div>
    )
}

export default ChannelPage