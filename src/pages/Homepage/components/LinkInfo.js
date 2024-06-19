import { RiLinksLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const LinkInfo = () => {
  return (
    <section className="bg-white rounded p-5 relative">
    <div className="mb-5">
        <h2 className="font-bold flex items-center"><RiLinksLine className="mr-1"/>Profile Links</h2>
        <div className="absolute top-5 right-8 cursor-pointer">
            <span><HiOutlinePencil/></span>
        </div>
    </div>
    <div className="grid grid-cols-3">
        <div className="pr-2 pb-2">
            <h2>Linkedin</h2>
            <p className="flex items-center"><FaLinkedin className="mr-3 text-blue-800"/> -</p>
        </div>
        <div className="pr-2 pb-2">
            <h2>HackerRank</h2>
            <p className="flex items-center"><FaHackerrank className="mr-3 text-green-500"/> -</p>
        </div>
        <div className="pr-2 pb-2">
            <h2>Github</h2>
            <p className="flex items-center"><FaGithub className="mr-3"/> -</p>
        </div>
        <div className="pr-2">
            <h2>Resume</h2>
            <p>-</p>
        </div>
    </div>
</section>
  )
}
