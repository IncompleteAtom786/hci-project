import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home";
import Animals from "./Pages/Animals";
import Anatomy from "./Pages/Anatomy";

export default function App() 
{
    return (
        <BrowserRouter>
            <div className={`text-center min-h-full min-w-full bg-black bg-gradient-to-bl flex flex-row`}>
                <div className={`min-h-full h-fit w-fit bg-cyan-800 p-4 flex flex-col items-center rounded-e-3xl`}>
                    <SideBar />
                </div>
                <div className={`min-h-full w-full m-3 rounded-3xl bg-red-300`}>
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