import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DynamicIcon from "./DynamicIcon";

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};
export default function TechnologyItem(props: any) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="mb-3 flex ">
      {isShown && (
        <BsFillArrowRightCircleFill
          size={30}
          className="mr-2 hidden text-blue-600 transition duration-300 ease-in-out sm:block"
        />
      )}
      <span
        className={classNames(
          "rounded-lg bg-slate-700 bg-opacity-40 p-2 backdrop-blur-xl"
        )}
      >
        <a
          href="www.google.com"
          className="relative flex cursor-pointer"
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {/* <BsFillArrowRightCircleFill
            size={30}
            className={classNames(
              " mr-2 text-blue-600 transition-all duration-300",
              !isShown && "invisible"
            )}
          /> */}
          <span className="flex self-center font-semibold">
            <DynamicIcon size={30} icon={props.icon} />
            <p className="ml-2 self-center text-white">{props.name}</p>
          </span>{" "}
        </a>
      </span>
    </li>
  );
}
