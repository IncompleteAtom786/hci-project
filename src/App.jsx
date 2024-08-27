import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Pages3";

export default function App() {
    return (
        <BrowserRouter>
            <div className={`flex flex-row text-center w-screen h-screen`}>
                <div className={`h-full`}>
                    <SideBar />
                </div>
                <div className={`w-full h-full p-5 rounded-3xl`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animals" element={<Page2 />} />
                        <Route path="/anatomy" element={<Page3 />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}