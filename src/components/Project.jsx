import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

export default function Project({ value }) {
    return (
        <div className="rounded-2xl shadow-xs
            hover:scale-105 transition-all duration-300 ease-in hover:shadow-md shadow-gray-400">
            <div>
                <img src={value.image.fields.file.url} className="w-full h-60 object-fill rounded-lg" />
            </div>
            <div className="p-6 mt-4">
                <h3 className="text-center text-neutral font-bold text-xl mb-4">{value.title}</h3>
                <p className="tracking-widest leading-7 mb-4">
                    {value.description}
                </p>
                <div className="flex flex-row items-center justify-center gap-4">
                    <a className="btn btn-neutral px-6" href={value.githubUrl} target="_blank">
                        <FaGithub /> GitHub
                    </a>
                    <a className="btn btn-soft btn-neutral px-6" href={value.publishUrl} target="_blank">
                        <IoEye /> Demo
                    </a>
                </div>
            </div>
        </div>
    )
}
