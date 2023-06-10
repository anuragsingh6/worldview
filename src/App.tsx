import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import SignupPage from "./SignupPage";

function App(){
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App