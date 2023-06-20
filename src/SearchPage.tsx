import { useEffect } from "react";
import SearchVideo from "./SearchVideo";

function SearchPage(props:any){
    
    useEffect(()=>{document.title=`Search "${props.searchQuery}" | Worldview`;},[])

    console.log("Entered SearchPage", props.searchData);
    for (let index in props.searchData.items){console.log(index,props.searchData.items[index]);};

    let search = props.searchQuery;

    return (
        <div className={`searchpage ${props.theme}`}>
            <h2 style={{padding:"0% 5%"}}>You Searched Worldview For: {search}</h2>
            {props.searchData ? 
            <div className="search-result-videos">
                <SearchVideo videoData={props.searchData.items[0]} />
                <SearchVideo videoData={props.searchData.items[1]} />
                <SearchVideo videoData={props.searchData.items[2]} />
                <SearchVideo videoData={props.searchData.items[3]} />
                <SearchVideo videoData={props.searchData.items[4]} />
                <SearchVideo videoData={props.searchData.items[5]} />
                <SearchVideo videoData={props.searchData.items[6]} />
                <SearchVideo videoData={props.searchData.items[7]} />
                <SearchVideo videoData={props.searchData.items[8]} />
                <SearchVideo videoData={props.searchData.items[9]} />
                <SearchVideo videoData={props.searchData.items[10]} />
                <SearchVideo videoData={props.searchData.items[11]} />
                <SearchVideo videoData={props.searchData.items[12]} />
                <SearchVideo videoData={props.searchData.items[13]} />
                <SearchVideo videoData={props.searchData.items[14]} />
                <SearchVideo videoData={props.searchData.items[15]} />
                <SearchVideo videoData={props.searchData.items[16]} />
                <SearchVideo videoData={props.searchData.items[17]} />
                <SearchVideo videoData={props.searchData.items[18]} />
            </div>
            : <div>Loading...</div>
            }
        </div>
    )
}

export default SearchPage