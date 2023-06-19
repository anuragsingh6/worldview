import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";
import { createContext, useState } from "react";

const Theme = createContext("light");

function App(){

    const [theme, setTheme] = useState("light");
    function toggleTheme(){setTheme((currentTheme)=>(currentTheme==="light"?"dark":"light"))}

    return (
        <>
        <Theme.Provider value={theme}>
            <BrowserRouter>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} />} />
                    <Route path="/login" element={<LoginPage theme={theme} />} />
                    <Route path="/signup" element={<SignupPage theme={theme} />} />
                    <Route path="*" element={<Page404 theme={theme} />} />
                </Routes>
            </BrowserRouter>
        </Theme.Provider>
        </>
    )
}

export default App