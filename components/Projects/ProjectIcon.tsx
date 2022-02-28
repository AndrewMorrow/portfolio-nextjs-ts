import { useState } from "react";
import DynamicIcon from "../DynamicIcon";

export default function ProjectIcon(props: { icon: any }) {
  const { icon } = props;
  const [iconInfoIsActive, setIconInfoIsActive] = useState(false);

  const handleIconInfo = (
    isActive: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIconInfoIsActive(isActive);
  };
  return (
    <li
      className="has-tooltip relative"
      onMouseEnter={() => handleIconInfo(true)}
      onMouseLeave={() => handleIconInfo(false)}
    >
      <a href={icon.href} className=" cursor-pointer self-center ">
        {" "}
        <DynamicIcon icon={icon.name} size={icon.size} />
      </a>
      <span className="tooltip left-1/2 -bottom-1 -translate-x-2/4 translate-y-[125%]  rounded-md p-1">
        <div className="absolute left-1/2 h-0 w-0  -translate-x-2/4 -translate-y-1/2 rotate-[135deg] border-8 border-slate-700 border-t-transparent border-r-transparent"></div>
        {icon.tip}
      </span>
    </li>
  );
}
