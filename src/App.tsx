import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";
import { createContext, useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import VideoPage from "./VideoPage";
import IndividualVideoPage from "./IndividualVideoPage";

const Theme = createContext("light");

function App(){

    const [searchQuery,setSearchQuery] = useState("");
    let [searchData,setSearchData]=useState();
    let [account,setAccount]=useState<any>({"worldviewUsername":localStorage.getItem("worldviewUsername")||null,"worldviewUseremail":localStorage.getItem("worldviewEmail")||null,"worldviewUserpassword":localStorage.getItem("worldviewPassword")||null});
    let [accountExists,setAccountExists]=useState<any>(localStorage.getItem("worldviewAccountCreated"));
    useEffect(()=>{;accountHandler();},[]);

    async function Search(){
        if ((searchQuery!=="")||(document.location.pathname.substring(18)!=="")){
            try{
                let searchURL=`https://youtube-browser-api.netlify.app/data/search?keyword=${searchQuery||document.location.pathname.substring(18)}`;
                let rawSearchData = await fetch(searchURL);
                searchData = await rawSearchData.json();
                setSearchData(searchData);
            }
            catch{
                console.log("Error loading data. Trying again.");
                setTimeout(Search,3000);
            };
        }
    }

    function validateAccountDetails(name:string,email:string,pswd:string){
        if (name===""){alert("Please Enter Your Name");return false;}
        else if (email===""){alert("Please Enter Your Email");return false;}
        else if (!email.includes("@")||!email.includes(".")||email.includes(" ")||email.substring(email.indexOf("@"))===""||email.substring(0,email.indexOf("@"))===""||email.substring(email.indexOf("."))===""||email.substring(0,email.indexOf("."))===""){alert("Invalid email");return false;}
        else if (pswd===""){alert("Please Enter a Password");return false;}
        else if (pswd.length<8){alert("Please Enter a Longer Password");return false;}
        return true;
    }

    function accountHandler(){
        if(localStorage.getItem("worldviewAccountCreated")===null){localStorage.setItem("worldviewAccountCreated","false");}
        else if(localStorage.worldviewAccountCreated==="true"){setAccount({"worldviewUsername":localStorage.getItem("worldviewUsername"),"worldviewUseremail":localStorage.getItem("worldviewEmail"),"worldviewUserpassword":localStorage.getItem("worldviewPassword")});return;}
    }

    function deleteAccount(){
        setAccountExists("false");localStorage.setItem("worldviewAccountCreated","false");
        setAccount({"worldviewUsername":null,"worldviewUseremail":null,"worldviewUserpassword":null});
        ["worldviewUsername","worldviewEmail","worldviewPassword"].map((item)=>localStorage.removeItem(item));
    }


    const [theme, setTheme] = useState("light");
    function toggleTheme(){setTheme((currentTheme)=>(currentTheme==="light"?"dark":"light"))}

    return (
        <>
        <Theme.Provider value={theme}>
            <BrowserRouter basename="/worldview">
                <Navbar theme={theme} toggleTheme={toggleTheme} Search={Search} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchData={setSearchData} accountHandler={accountHandler} account={account} accountExists={accountExists} deleteAccount={deleteAccount} />
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} />} />
                    <Route path="/login" element={<LoginPage theme={theme} validateAccountDetails={validateAccountDetails} accountHandler={accountHandler} accountExists={accountExists} />} />
                    <Route path="/signup" element={<SignupPage theme={theme} validateAccountDetails={validateAccountDetails} accountHandler={accountHandler} setAccountExists={setAccountExists} accountExists={accountExists} />} />

                    <Route path="/search/" element={<div className={`searchPage ${theme}`} style={{width:"100%"}}><h2>Search for something</h2></div>} />
                    <Route path="/search/*" element={<SearchPage theme={theme} searchQuery={searchQuery} searchData={searchData} Search={Search} />} />
                    
                    <Route path="/video/" element={<div className={`videoPage ${theme}`} style={{width:"100%"}}><h2 style={{margin:"10vw 5vw"}}><Link to="/videos/" style={{all:"unset",cursor:"pointer"}}>Go to Videos</Link></h2></div>} />
                    <Route path="/videos/" element={<VideoPage theme={theme} />} />
                    <Route path="/video/*" element={<IndividualVideoPage theme={theme} />} />
                    
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