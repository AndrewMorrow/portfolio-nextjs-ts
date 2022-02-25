import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col mb-3">
      <h2 className=" text-2xl font-bold self-center mb-2 underline">
        Contact Information
      </h2>

      <div className="mb-2 flex justify-center">
        <span className="font-medium mr-2 flex">
          <GiMailbox size={20} />:
        </span>
        <a href="mailto: beardedmongo@gmail.com" className="text-blue-400">
          beardedmongo@gmail.com
        </a>
      </div>
      <h3 className="text-center font-medium mb-2 underline">Social</h3>
      <div className="flex justify-center">
        <ul className="self-center flex gap-6">
          <li>
            <a
              href="https://github.com/AndrewMorrow"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} className="text-gray-900"/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrewsmorrow/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="text-blue-600"/>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/amorrow91"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} className="text-blue-500"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
