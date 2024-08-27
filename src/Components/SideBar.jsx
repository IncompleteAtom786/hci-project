import { useState } from "react"
import { AiOutlineDoubleLeft, AiOutlineUnderline } from "react-icons/ai"
import { BsList, BsXLg } from "react-icons/bs";
import { GiAnatomy } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideBar() 
{

    const [open, setOpen] = useState(true);
    const WebPages = [
        {
            title: "Wiki 3D",
            link: "/",
            icon: <AiOutlineUnderline />
        },
        {
            title: "Animals",
            link: "/page2",
            icon: <AiOutlineDoubleLeft />
        },
        {
            title: "Anatomy",
            link: "/anatomy",
            icon: <GiAnatomy />
        }
    ]


    return (
        <div className={`h-full bg-black text-3xl w-fit rounded-e-3xl flex flex-col`}>
            <div className={`text-3xl p-2 m-3 w-fit text-black bg-white rounded-full cursor-pointer`}
                onClick={() => { setOpen(!open); }}>
                {!open ? <BsList /> : <BsXLg />}
            </div>
            <ul className={`mt-10 p-3`}>
                {WebPages.map((page, index) => (
                    <Link to={page.link}>
                        <li key={index + 1} className={`font-bold text-center mb-5 text-white bg-slate-400 border-white cursor-pointer flex flex-row rounded-xl ${!open ? "w-fit" : "min-w-max"}`}>
                            <div className={`text-center text-4xl h-fit w-fit p-1 m-2`}>{page.icon}</div>
                            {open && <span className={`text-xl content-center m-3 p-1`}> {page.title}</span>}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

    )
}