import { useState } from "react"
import { AiOutlineDoubleLeft, AiOutlineUnderline } from "react-icons/ai"
import { TbRotate3D } from "react-icons/tb";
import { SiAnimalplanet } from "react-icons/si";
import { BsList, BsXLg } from "react-icons/bs";
import { SiFossilscm } from "react-icons/si";
import { GiAnatomy } from "react-icons/gi";
import { GiDinosaurBones } from "react-icons/gi";
import { TbMicroscope } from "react-icons/tb";

import { Link } from "react-router-dom";

export default function SideBar() {

    const [open, setOpen] = useState(true);
    const WebPages = [
        {
            title: "Wiki 3D",
            link: "/",
            icon: <TbRotate3D />
        },
        {
            title: "Animals",
            link: "/animals",
            icon: <SiAnimalplanet />
        },
        {
            title: "Anatomy",
            link: "/anatomy",
            icon: <GiAnatomy />
        },
        {
            title: "Fossils",
            link: "/fossils",
            icon: <SiFossilscm />
        },
        {
            title: "Bones",
            link: "/bones",
            icon: <GiDinosaurBones />
        },
        {
            title: "Instruments",
            link: "/instruments",
            icon: <TbMicroscope />
        }
    ]

    return (
        <div className={`h-full bg-slate-600 text-3xl w-fit rounded-e-3xl flex flex-col`}>
            <div className={`text-3xl p-2 m-3 w-fit ml-4 text-black bg-white rounded-full cursor-pointer`}
                onClick={() => { setOpen(!open); }}>
                {!open ? <BsList /> : <BsXLg />}
            </div>
            <div className={`mt-10 p-3`}>
                <ul>
                    {WebPages.map((page, index) => (
                        <Link to={page.link}>
                            <li key={index + 1} className={`shadow-lg ease-in shadow-slate-300 font-bold text-center mb-5 text-white bg-black border-white cursor-pointer flex flex-row rounded-xl ${!open ? "w-fit" : "min-w-max"}`}>
                                <div className={`text-center text-4xl h-fit w-fit p-1 m-2`}>{page.icon}</div>
                                {open && <span className={`text-xl content-center m-3 p-1`}>{page.title}</span>}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}