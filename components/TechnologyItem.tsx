import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DynamicIcon from "./DynamicIcon";

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};
export default function TechnologyItem(props: any) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="flex mb-3 ">
      <span
        className={classNames(
          props.flipped
            ? "bg-slate-800  p-2 bg-opacity-60 backdrop-blur-xl rounded-lg "
            : "bg-slate-700 p-2 bg-opacity-40 backdrop-blur-xl  rounded-lg"
        )}
      >
        <a
          href="www.google.com"
          className="flex cursor-pointer relative"
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <BsFillArrowRightCircleFill
              size={30}
              className="mr-2 text-green-700"
            />
          )}
          <span className="self-center font-semibold flex">
            <DynamicIcon size={30} icon={props.icon} />
            <p className="ml-2 self-center text-white">{props.name}</p>
          </span>{" "}
        </a>
      </span>
    </li>
  );
}
