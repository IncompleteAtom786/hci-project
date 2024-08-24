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
                <div className={`h-full w-full`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}