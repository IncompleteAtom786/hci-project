/* eslint-disable react/jsx-key */
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
            index: 0,
            title: "Wiki 3D",
            link: "/",
            icon: <TbRotate3D />
        },
        {
            index: 1,
            title: "Animals",
            link: "/animals",
            icon: <SiAnimalplanet />
        },
        {
            index: 2,
            title: "Anatomy",
            link: "/anatomy",
            icon: <GiAnatomy />
        },
        {
            index: 3,
            title: "Fossils",
            link: "/fossils",
            icon: <SiFossilscm />
        },
        {
            index: 4,
            title: "Bones",
            link: "/bones",
            icon: <GiDinosaurBones />
        },
        {
            index: 5,
            title: "Instruments",
            link: "/instruments",
            icon: <TbMicroscope />
        }
    ]

    return (
        <>
            <div className={`text-3xl text-center self-start text-white rounded-e-full -ml-3 p-3 -mt-4 cursor-pointer w-fit h-fit`}
                onClick={() => { setOpen(!open); }}>
                {!open ? <BsList /> : <BsXLg />}
            </div>
            <div className={`mt-10`}>
                <ul>
                    {WebPages.map((page) => (
                        <Link to={page.link}>
                            <li className={`shadow-lg shadow-stone-900 font-bold text-white bg-black border-white cursor-pointer flex flex-row rounded-xl min-w-max min-h-max mb-6 p-2`}>
                                <div className={`text-4xl`}>{page.icon}</div>
                                {open && <div className={`text-md pl-8 p-1`}>{page.title}</div>}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}
