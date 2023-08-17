import Image from "next/image";
import React, { FC } from "react";
import userimg1 from "/public/assets/browse-users/1.png";

const DropdownProfileItem: FC<{
  title: string;
  picType: "png-jpg" | "svg";
  picSrc?: string;
  svgCode?: string;
}> = ({ title, picType, picSrc = "", svgCode = "" }) => {
  return (
    <a
      href=""
      className="dropdown-item flex items-center p-1 text-white text-[13px] cursor-pointer hover:underline"
    >
      {picType === "png-jpg" ? (
        <Image src={picSrc} alt="" height={32} className="rounded mr-2" />
      ) : (
        <div className="h-8 w-8 flex items-center justify-center">
          <svg
            className="mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d={svgCode}
              className="fill-B3"
            ></path>
          </svg>
        </div>
      )}
      {title}
    </a>
  );
};

export default DropdownProfileItem;
