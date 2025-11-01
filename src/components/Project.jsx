import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

export default function Project({value}) {
    return (
        <div className="rounded-2xl p-6 cursor-pointer shadow-xs
            hover:scale-105 transition-all duration-300 ease-in hover:shadow-md shadow-gray-400">
            <img src={value.icon} className="w-full h-50 object-fill mb-10 rounded-lg"/>
            <h3 className="text-center text-neutral font-bold text-xl mb-4">{value.name}</h3>
            <p className="tracking-widest leading-7 mb-4">
                {value.description}
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
                <a className="btn btn-neutral px-6">
                    <FaGithub /> GitHub
                </a>
                <a className="btn btn-soft btn-neutral px-6">
                    <IoEye /> Demo
                </a>
            </div>
        </div>
    )
}
