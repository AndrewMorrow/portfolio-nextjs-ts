import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";

export default function Contact() {
  return (
    <div
      id="contact"
      className="mb-3 flex flex-col content-center justify-center"
    >
      <h2 className=" mb-2 flex-wrap  text-center text-2xl font-bold border-t border-slate-700 border-opacity-50
      p-2">
        Contact Information
      </h2>

      <div className="mb-2 flex justify-center">
        <span className="mr-2 flex font-medium">
          <GiMailbox size={20} />:
        </span>
        <a
          href="mailto: beardedmongo@gmail.com"
          className="text-blue-300 underline"
        >
          beardedmongo@gmail.com
        </a>
      </div>
      <h3
        className="mb-2 
      p-2 
      text-center font-medium "
      >
        Social
      </h3>

      <div className="flex justify-center">
        <ul className="flex gap-6 self-center">
          <li>
            <a
              href="https://github.com/AndrewMorrow"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} className="text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrewsmorrow/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="text-blue-600" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/amorrow91"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} className="text-sky-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
