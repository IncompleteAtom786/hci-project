import { useState } from "react"
import { TbRotate3D } from "react-icons/tb";
import { SiAnimalplanet, SiFossilscm } from "react-icons/si";
import { BsList, BsXLg } from "react-icons/bs";
import { GiDinosaurBones, GiAnatomy } from "react-icons/gi";
import { TbMicroscope } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function SideBar() 
{

    const [open, setOpen] = useState(false);
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
        <>
            <div className={`text-4xl text-center self-start text-white rounded-e-full -ml-6 p-3 -mt-4 cursor-pointer w-fit h-fit`}
                onClick={() => { setOpen(!open); }}>
                {!open ? <BsList /> : <BsXLg />}
            </div>
            <div className={`mt-16`}>
                <ul>
                    {WebPages.map((page) => (
                        <Link to={page.link}>
                            <li key={page.title} className={`shadow-lg shadow-stone-900 font-bold text-white bg-black border-white cursor-pointer flex flex-row rounded-xl min-w-max min-h-max mb-6 p-3`}>
                                <div className={`text-4xl`}>{page.icon}</div>
                                {open && <div className={`text-xl pl-8 p-1`}>{page.title}</div>}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}