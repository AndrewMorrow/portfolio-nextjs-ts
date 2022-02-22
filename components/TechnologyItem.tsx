import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DynamicIcon from "./DynamicIcon";

export default function TechnologyItem(props: any) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li className="flex  mb-3">
      <a
        href="www.google.com"
        className="flex cursor-pointer relative"
        onMouseOver={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && <BsFillArrowRightCircleFill size={30} className="mr-2" />}
        <span className="self-center font-semibold flex">
          <p className="mr-2 self-center">{props.name}</p>
          <DynamicIcon size={30} icon={props.icon} />
        </span>{" "}
      </a>
    </li>
  );
}
