import { useEffect, useState } from "react";
import SearchVideo from "./SearchVideo";

function SearchPage(props:any){
    let [clicked, setClicked] = useState("all");

    useEffect(()=>{document.title=`Search "${props.searchQuery}" | Worldview`;}, [props.searchQuery])

    function updateView(){
        let elements=document.getElementsByClassName('search-video');
        let videoElements=[];let channelElements=[];
        for (let i=0;i<elements.length;i++){
            if (elements[i].childNodes[1].childNodes[2].textContent===""){channelElements.push(elements[i]);}
            else{videoElements.push(elements[i]);}
        }
        if  (clicked==="all"){for(let i=0;i<elements.length;i++){elements[i].setAttribute("style","display:flex")}}
        else if (clicked==="videos"){
            for(let i=0;i<channelElements.length;i++){channelElements[i].setAttribute("style","display:none")};
            for(let i=0;i<videoElements.length;i++){videoElements[i].setAttribute("style","display:flex")};
        }
        else if (clicked==="channels"){
            for(let i=0;i<videoElements.length;i++){videoElements[i].setAttribute("style","display:none")};
            for(let i=0;i<channelElements.length;i++){channelElements[i].setAttribute("style","display:flex")};
        }
    }

    return (
        <div className={`searchpage ${props.theme}`}>
            <div style={{padding:"0% 5%"}}>
                <h2>You Searched Worldview For:</h2>
                <h2 style={{textAlign:"center"}}>"{props.searchQuery}"</h2>
            </div>
            {props.searchData ? 
            <div className="search-results">
                <div className="search-result-sort-options">
                    <button className="search-result-sort-option-button" onClick={()=>{setClicked("all");updateView();}} style={{color:clicked==="all"?"white":"black",backgroundColor:clicked==="all"?"black":"#eeeeee"}}>All</button>
                    <button className="search-result-sort-option-button" onClick={()=>{setClicked("videos");updateView();}}style={{color:clicked==="videos"?"white":"black",backgroundColor:clicked==="videos"?"black":"#eeeeee"}}>Videos</button>
                    <button className="search-result-sort-option-button" onClick={()=>{setClicked("channels");updateView();}} style={{color:clicked==="channels"?"white":"black",backgroundColor:clicked==="channels"?"black":"#eeeeee"}}>Channels</button>
                </div>
                {props.searchData.items.map((dataItem:any)=>{return <SearchVideo videoData={dataItem} />})}
            </div>
            : <div>Loading...</div>
            }
        </div>
    )
}

export default SearchPage