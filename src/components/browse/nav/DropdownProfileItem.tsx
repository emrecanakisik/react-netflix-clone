import Image from "next/image";
import React, { FC } from "react";
import LogoIcon from "@/components/LogoIcon";

const DropdownProfileItem: FC<{
  title: string;
  picType: "png-jpg" | "svg";
  picSrc?: string;
  iconName?: string;
}> = ({ title, picType, picSrc = "", iconName = "" }) => {
  return (
    <a
      href=""
      className="dropdown-item flex items-center p-1 text-white text-[13px] cursor-pointer hover:underline"
    >
      {picType === "png-jpg" ? (
        <Image src={picSrc} alt="" height={32} className="rounded mr-2" />
      ) : (
        <div className="h-8 w-8 flex items-center justify-center">
          <LogoIcon
            Name={iconName}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            group={false}
            classNameSVG="mr-2"
            classNamePATH="fill-B3"
          />
        </div>
      )}
      {title}
    </a>
  );
};

export default DropdownProfileItem;
