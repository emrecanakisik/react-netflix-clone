import LogoIcon from "@/components/LogoIcon";
import React, { FC } from "react";

const PlayInfoReplayBtn: FC<{
  title: string;
  iconName: string;
  iconWidth?: string;
  iconHeight?: string;
}> = ({ title, iconName, iconWidth = "1.787", iconHeight = "1.787" }) => {
  return (
    <button
      className={`flex items-center group relative overflow-hidden ${
        title === "Replay"
          ? "p-[0.6vw] rounded-full border border-white mr-[1.1vw]"
          : "py-[0.6vw] px-[1.5vw] rounded mb-[0.75vw] mr-[0.75vw]"
      }  text-[1.2vw] font-medium ${title !== "Play" ? "text-white" : ""} z-10`}
    >
      <div
        className={`btn-bg absolute min-w-full h-full left-0 -z-10 ${
          title === "Replay" && "group-hover:bg-white group-hover:opacity-20"
        } ${
          title === "Play"
            ? "bg-white group-hover:opacity-75"
            : title === "More Info"
            ? "bg-transparentGray07 group-hover:opacity-70 text-white"
            : ""
        }`}
      ></div>
      <LogoIcon
        Name={iconName}
        viewBox="0 0 24 24"
        width={`${iconWidth}vw`}
        height={`${iconHeight}vw`}
        classNameSVG={title !== "Replay" ? "mr-[0.75vw]" : ""}
        fillPATH={title !== "Play" ? "white" : "black"}
        group={false}
      />
      {title !== "Replay" ? title : ""}
    </button>
  );
};

export default PlayInfoReplayBtn;
