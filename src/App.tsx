import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";
import { createContext, useState } from "react";
import SearchPage from "./SearchPage";
import VideoPage from "./VideoPage";
import ChannelPage from "./ChannelPage";
import IndividualVideoPage from "./IndividualVideoPage";

const Theme = createContext("light");

function App(){

    const [searchQuery,setSearchQuery] = useState("");
    let [searchData,setSearchData]=useState();

    async function Search(){
        if (searchQuery!==""){
            try{
                let searchURL=`https://youtube-browser-api.netlify.app/data/search?keyword=${searchQuery}`;
                let rawSearchData = await fetch(searchURL);
                searchData = await rawSearchData.json();
                setSearchData(searchData);
                console.log("App.tsx:",searchQuery,searchData);
            }
            catch{
                console.log("Error loading data. Trying again.");
                setTimeout(Search,3000);
            };
        }
    }

    const [theme, setTheme] = useState("light");
    function toggleTheme(){setTheme((currentTheme)=>(currentTheme==="light"?"dark":"light"))}

    return (
        <>
        <Theme.Provider value={theme}>
            <BrowserRouter>
                <Navbar theme={theme} toggleTheme={toggleTheme} Search={Search} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchData={setSearchData} />
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} />} />
                    <Route path="/login" element={<LoginPage theme={theme} />} />
                    <Route path="/signup" element={<SignupPage theme={theme} />} />

                    <Route path="/search/*" element={<SearchPage theme={theme} searchQuery={searchQuery} searchData={searchData} />} />
                    
                    <Route path="/video/" element={<div className={`videoPage ${theme}`} style={{width:"100%"}}><h2 className={`videoPage-h2 ${theme}`}><Link to="/videos/" style={{all:"unset",cursor:"pointer"}}>Go to Videos</Link></h2></div>} />
                    <Route path="/videos/" element={<VideoPage theme={theme} />} />
                    <Route path="/video/*" element={<IndividualVideoPage theme={theme} />} />
                    
                    <Route path="/channel/" element={<div className={`videoPage ${theme}`} style={{width:"100%"}}><h2 className={`videoPage-h2 ${theme}`}><Link to="/videos/" style={{all:"unset",cursor:"pointer"}}>Go to Videos</Link></h2></div>} />
                    <Route path="/channel/*" element={<ChannelPage theme={theme} />} />
                    <Route path="*" element={<Page404 theme={theme} />} />
                </Routes>
                <div id="footer" className={`${theme}`}>
                    <a href="https://www.github.com/anuragsingh6/worldview" className={theme}>Report a bug/ Request a feature</a><br />
                    &copy; Anurag Singh. All rights reserved.
                </div>
            </BrowserRouter>
        </Theme.Provider>
        </>
    )
}

export default App