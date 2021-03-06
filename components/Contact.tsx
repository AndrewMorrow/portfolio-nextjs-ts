import { FaGithub, FaLinkedin, FaRegFilePdf, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";

export default function Contact() {
  return (
    <div
      id="contact"
      className="mb-3 flex flex-col content-center justify-center"
    >
      <h2
        className=" flex-wrap p-2 text-center font-playfair text-2xl
      font-bold lg:text-3xl"
      >
        Contact Information
      </h2>
      <hr className="mb-4 opacity-25 md:w-1/2 md:translate-x-1/2" />

      <div className="mb-2 flex justify-center">
        <div></div>
        <span className="mr-2 flex font-medium">
          <GiMailbox size={20} />:
        </span>
        <a
          href="mailto: beardedmongo@gmail.com"
          className="text-blue-400 underline visited:text-purple-400"
        >
          beardedmongo@gmail.com
        </a>
      </div>
      <div className="mb-2 flex justify-center">
        <span className="mr-2 flex font-medium">
          <FaRegFilePdf size={20} color={"white"} /> :
        </span>
        <a
          href="/documents/Andrew_Morrow_Resume_2022.pdf"
          download
          className="mr-1 flex gap-1 text-center text-blue-400 underline visited:text-purple-400"
        >
          Download My Resume <FiDownload size={20} />
        </a>
      </div>
      <h3
        className="mb-2 
      p-2 
      text-center font-playfair font-medium"
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
              <FaTwitter size={30} className="text-blue-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
