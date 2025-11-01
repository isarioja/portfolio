import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 h-30 md:h-15 grid md:grid-cols-3 place-items-center p-2 text-white 
        font-mono text-md md:text-sm">
            <h2 className="text-center">Designed and Developed by Isabel Rioja</h2>
            <p>
                Copyright &copy; {new Date().getFullYear()} IR
            </p>
            <div className="flex gap-8 text-lg">
                <a className="cursor-pointer" href="https://www.linkedin.com/in/isabel-rioja-75a68224a/" target="_blank">
                    <FaLinkedinIn />
                </a>
                <a className="cursor-pointer" href="https://github.com/isarioja" target="_blank">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
