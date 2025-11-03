import { NavLink } from "react-router-dom";
import { GITHUB_MENU } from "../utils/constant";

const getMenuStyles = (isActive) => {
    return `text-white font-semibold text-md flex flex-col 
            justify-center items-center hover:text-fuchsia-600 hover:scale-105
            w-20 p-2 rounded-xl border-2 border-solid
            transition-all duration-300 ease-in-out
            ${isActive ? 'border-fuchsia-600 scale-105' : 'border-transparent'}`
}

export default function MenuItem({ menu }) {
    const isExternalMenu = menu.title === GITHUB_MENU;

    return (
        <>
            {
                isExternalMenu
                    ?
                    <a className={getMenuStyles(false)} href={menu.to} target="_blank">
                        {menu.icon}
                        {menu.title}
                    </a>
                    :
                    <NavLink className={({ isActive }) => getMenuStyles(isActive)} to={menu.to}>
                        {menu.icon}
                        {menu.title}
                    </NavLink>
            }
        </>

    )
}
