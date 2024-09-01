import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home";
import Animals from "./Pages/Animals";
import Anatomy from "./Pages/Anatomy";

export default function App() 
{
    return (
        <BrowserRouter>
            <div className={`text-center max-w-screen h-fit min-h-screen bg-black bg-gradient-to-bl flex flex-row py-2`}>
                <div className={`min-h-full max-w-fit bg-cyan-800 p-3 flex flex-col items-center rounded-e-3xl mr-5`}>
                    <SideBar />
                </div>
                <div className={`min-h-full w-full rounded-xl bg-red-300 mr-1`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animals" element={<Animals />} />
                        <Route path="/anatomy" element={<Anatomy />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}