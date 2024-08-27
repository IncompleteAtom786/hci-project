import { useState } from "react"
import { AiOutlineDoubleLeft, AiOutlineUnderline } from "react-icons/ai"
import { BsList, BsXLg } from "react-icons/bs";
import { GiAnatomy } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SideBar() {

    const [open, setOpen] = useState(true);
    const Webpages = [
        { title: "Wiki 3D", link: "/", icon: <AiOutlineDoubleLeft /> },
        { title: "Animals", link: "/page2", icon: <AiOutlineDoubleLeft /> },
        { title: "Antatomy", link: "/anatomy", icon: <GiAnatomy /> }
    ];

    return (
        <div className={`h-full bg-black text-3xl w-fit rounded-e-3xl flex flex-col`}>
            <div className={`text-3xl p-2 m-3 text-center w-fit text-black bg-white rounded-full cursor-pointer`}
                onClick={() => { setOpen(!open); }}>
                {!open ? <BsList /> : <BsXLg />}
            </div>
            <ul className={`mt-10`}>
                {Webpages.map((page, index) => (
                    <Link to={page.link}>
                        <li key={index} className={`m-3 p-2 font-bold text-center mb-5 min-w-max text-white bg-slate-400 border-white cursor-pointer text-lg flex flex-row`}>
                            <div className={`text-center h-fit w-fit m-1`}>{page.icon}</div>
                            {open && <span className={`ml-3 pr-12`}> {page.title}</span>}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

    )
}