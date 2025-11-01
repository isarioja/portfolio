import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { useState } from "react";

const Menus = [
    { id: 1, title: 'Home', to: '/', icon: <FaHome /> },
    { id: 2, title: 'About', to: 'about', icon: <FaRegUser /> },
    { id: 3, title: 'Projects', to: 'projects', icon: <AiOutlineFundProjectionScreen /> },
    { id: 4, title: 'Github', to: 'github', icon: <FaCodeBranch /> }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-neutral text-fuchsia-600 sticky top-0 z-[1000]">
            <div className="container flex justify-between items-center py-2">
                {/* LOGO */}
                <Link to="/">
                    <p className="text-5xl font-bold">IR.</p>
                </Link>

                {/* MENU */}
                <ul className="hidden md:flex md:gap-4">
                    {
                        Menus.map(value => {
                            return (
                                <MenuItem key={value.id} menu={value} />
                            )
                        })
                    }
                </ul>

                {/* HAMBURGER ICON */}
                <div className="flex md:hidden h-7 w-10 flex-col cursor-pointer justify-between"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bar ${isOpen && 'translate-y-3.5 rotate-45'}`}></span>
                    <span className={`bar ${isOpen && 'opacity-0'}`}></span>
                    <span className={`bar ${isOpen && '-translate-y-2.5 -rotate-45'}`}></span>
                </div>
            </div>

            {/* MOBILE MENU  */}
            <ul className={`bg-neutral absolute top-full left-0 right-0 flex flex-col text-2xl 
                    items-center overflow-hidden transition-all duration-500 ease-in 
                    ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                {
                    Menus.map(value => {
                        return <Link className="py-5 text-white flex flex-row gap-4 items-center" key={value.id} to={value.to} 
                            onClick={() => setIsOpen(false)}>
                            { value.icon }
                            { value.title }
                        </Link>
                    })
                }
            </ul>
        </nav>
    )
}
