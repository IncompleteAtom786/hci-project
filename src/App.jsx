import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home";
import Animals from "./Pages/Animals";
import Anatomy from "./Pages/Anatomy";
import Fossils from "./Pages/Fossils";
import Instruments from "./Pages/Instruments";
import Bones from "./Pages/Bones";

export default function App()
{
    return (
        <BrowserRouter>
            <div className={`text-center max-w-screen h-fit min-h-screen bg-black bg-gradient-to-bl flex flex-row py-2`}>
                <div className={`min-h-full max-w-fit bg-emerald-400 p-3 flex flex-col items-center rounded-e-3xl mr-5`}>
                    <SideBar />
                </div>
                <div className={`min-h-full w-full rounded-xl bg-black mr-1`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animals" element={<Animals />} />
                        <Route path="/anatomy" element={<Anatomy />} />
                        <Route path="/fossils" element={<Fossils />} />
                        <Route path="/instruments" element={<Instruments />} />
                        <Route path="/bones" element={<Bones />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
