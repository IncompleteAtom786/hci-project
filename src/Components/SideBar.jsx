import { useState } from "react"
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Link } from "react-router-dom";

export default function SideBar() {

    const [open, setOpen] = useState(true);
    const Webpages = [
        { title: "Wiki 3D", link: "/" },
        { title: "Animals", link: "/page2" },
        { title: "Bones", link: "/page3" }
    ];

    return (
        <div className={`h-full bg-black text-3xl ${open ? "w-64" : "w-20"} duration-700 flex flex-col`}>
            <div className={`mt-5`}>
                <AiOutlineDoubleLeft className={`text-4xl p-2 ml-3 text-center text-black bg-white border rounded-full cursor-pointer ${!open && "rotate-180"} duration-700`}
                    onClick={() => { setOpen(!open); }}
                />
            </div>
            <div>
                <ul className="pt-10">
                    {Webpages.map((page, index) => (
                        <li key={index} className={`text-white text-left p-2 mb-8 cursor-pointer text-2xl`}>
                            <Link to={page.link}> {page.title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}