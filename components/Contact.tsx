import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col mb-6">
      <h2 className=" text-2xl font-bold self-center mb-2 underline">
        Contact Information
      </h2>
      <ul className="self-center">
        <li className="mb-2">
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto: beardedmongo@gmail.com" className="text-blue-500">
            beardedmongo@gmail.com
          </a>
        </li>
        <h3 className="text-center font-medium mb-2 underline">Social</h3>
        <div className="flex justify-evenly">
          <li>
            <a
              href="https://github.com/AndrewMorrow"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrewsmorrow/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/amorrow91"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}
