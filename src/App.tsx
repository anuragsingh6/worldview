import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";
import { createContext, useState } from "react";
import SearchPage from "./SearchPage";

const Theme = createContext("light");

function App(){

    const [searchQuery,setSearchQuery] = useState("");
    let [searchData,setSearchData]=useState("Loading...");

    async function Search(){
        if (searchQuery!==""){
            let searchURL=`https://youtube-browser-api.netlify.app/data/search?keyword=${searchQuery}`;
            let rawSearchData = await fetch(searchURL);
            searchData = await rawSearchData.json();
            setSearchData(searchData);
            console.log("App.tsx:",searchQuery,searchData);
        }
    }

    const [theme, setTheme] = useState("light");
    function toggleTheme(){setTheme((currentTheme)=>(currentTheme==="light"?"dark":"light"))}

    return (
        <>
        <Theme.Provider value={theme}>
            <BrowserRouter>
                <Navbar theme={theme} toggleTheme={toggleTheme} Search={Search} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} />} />
                    <Route path="/login" element={<LoginPage theme={theme} />} />
                    <Route path="/signup" element={<SignupPage theme={theme} />} />
                    <Route path="/search" element={<SearchPage theme={theme} searchQuery={searchQuery} searchData={searchData} />} />
                    <Route path="*" element={<Page404 theme={theme} />} />
                </Routes>
            </BrowserRouter>
        </Theme.Provider>
        </>
    )
}

export default App