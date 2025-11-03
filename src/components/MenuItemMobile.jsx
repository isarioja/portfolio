import { Link } from "react-router-dom";
import { GITHUB_MENU } from "../utils/constant";

const styles = "py-5 text-white flex flex-row gap-4 items-center";

export default function MenuItemMobile({handleClick, menu}) {
    const isExternalMenu = menu.title === GITHUB_MENU;

    return (
        <>
            {
                isExternalMenu ?
                    <a className={styles} href={menu.to} target="_blank"
                        onClick={handleClick}>
                        {menu.icon}
                        {menu.title}
                    </a>
                    : <Link className={styles} to={menu.to}
                        onClick={handleClick}>
                        {menu.icon}
                        {menu.title}
                    </Link>
            }

        </>
    )
}
