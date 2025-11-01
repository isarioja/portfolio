import { NavLink } from "react-router-dom";

export default function MenuItem({ menu }) {
    return (
        <NavLink className={({isActive}) => `text-white font-semibold text-md flex flex-col 
            justify-center items-center hover:text-fuchsia-600 hover:scale-105
            w-20 p-2 rounded-xl border-2 border-solid
            transition-all duration-300 ease-in-out
            ${isActive ? 'border-fuchsia-600 scale-105': 'border-transparent'}`} to={menu.to}>
            {menu.icon}
            {menu.title}
        </NavLink>
    )
}
