import Image from "next/image";
import React, { FC } from "react";

type browseUser = {
  profileName: string;
  imgSrc: any;
  imgAlt: number;
};

const BrowseUser: FC<browseUser> = ({ profileName, imgSrc, imgAlt }) => {
  return (
    <li className="w-[10vw] min-w-fit h-auto flex group mr-[2vw] last:mr-0">
      <button>
        {/* <Image
          src={imgSrc}
          className="w-full h-48 rounded group-hover:ring-4"
          alt={`profileImg ${imgAlt}`}
        /> */}

        <div className="w-full h-[10vw] rounded relative overflow-hidden">
          <div className="group-hover:border-[.25vw] w-full h-full absolute z-20"></div>
          <Image
            src={imgSrc}
            className="w-full h-[10vw]"
            alt={`profileImg ${imgAlt}`}
          />
        </div>
        <span className="block mt-3 text-[1.3vw] text-[rgb(128,128,128)] group-hover:text-white">
          {profileName}
        </span>
      </button>
    </li>
  );
};

export default BrowseUser;
