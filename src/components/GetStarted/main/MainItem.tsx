import React, { FC, useContext } from "react";

type img_video = {
  sectionH1: string;
  sectionH2: string;
  img1src: string;
  img2src?: string;
  img3src?: string;
  videosrc?: string;
  imgSide: "left" | "right";
  videoClass?: string;
  miniBoxH1?: string;
  miniBoxH2?: string;
};

const MainItem: FC<img_video> = ({
  sectionH1,
  sectionH2,
  img1src,
  img2src,
  img3src,
  videosrc,
  imgSide,
  videoClass,
  miniBoxH1,
  miniBoxH2,
}) => {
  return (
    /* px-[23rem] */
    <div
      className={`flex ${
        imgSide === "right" ? "flex-row-reverse" : "flex-row"
      } px-[22.75rem] justify-between items-center`}
    >
      <div className="relative min-w-[36.3rem] h-[27.2rem]">
        <img src={img1src} alt="" className="h-full relative z-20" />
        {videosrc ? (
          <video
            src={videosrc}
            className={videoClass}
            loop
            autoPlay
            muted
          ></video>
        ) : (
          ""
        )}
        {img2src ? (
          <div className="phn-download absolute bottom-7 bg-black left-1/4 flex justify-between items-center w-72 px-3 py-2 rounded-xl border-2 border-zinc-700 z-20">
            <img src={img2src} alt="" className={"h-20"} />
            <div className="flex-1 flex flex-col ml-4">
              <h1 className="font-medium text-white">{miniBoxH1}</h1>
              <h2 className="text-sm text-blue-700">{miniBoxH2}</h2>
            </div>
            <img src={img3src} alt="" className={"w-12"} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-[36.3rem] text-white">
        <h1 className="text-5xl font-bold">{sectionH1}</h1>
        <h2 className="text-2xl mt-4">{sectionH2}</h2>
      </div>
    </div>
  );
};

export default MainItem;
