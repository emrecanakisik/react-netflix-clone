import React, { useContext } from "react";
import { useRouter } from "next/router";
import MainItem from "./MainItem";
import sec1Img1 from "/public/assets/begin-page/main/section-1/tv.png";
/* import sec1video from "/public/assets/begin-page/main/section-1/tv-video.mp4"; */
import sec2Img1 from "/public/assets/begin-page/main/section-2/mobile-img.jpg";
import sec2Img2 from "/public/assets/begin-page/main/section-2/boxshot.png";
import sec2Img3 from "/public/assets/begin-page/main/section-2/download.gif";
import sec3Img1 from "/public/assets/begin-page/main/section-3/video-device-img.png";
/* import sec3video from "/assets/begin-page/main/section-3/device-video.mp4"; */
import sec4Img1 from "/public/assets/begin-page/main/section-4.png";
import { Contexts } from "../../../contexts/LangContext";

const Main = () => {
  const { isLang } = useContext(Contexts);
  const main = isLang.context.GSLang.main;

  //for videos of MainItem components;
  const router = useRouter();
  const sec1video =
    router.basePath + "/assets/begin-page/main/section-1/tv-video.mp4";
  const sec3video =
    router.basePath + "/assets/begin-page/main/section-3/device-video.mp4";
  return (
    <main className="left-20 bg-black h-auto">
      <MainItem
        sectionH1={main.s1.H1}
        sectionH2={main.s1.H2}
        videosrc={sec1video}
        videoClass="absolute top-[5.6rem] left-[4.7rem] w-[28.5rem] z-10"
        imgSide="right"
        img1src={sec1Img1}
      />
      <MainItem
        sectionH1={main.s2.H1}
        sectionH2={main.s2.H2}
        imgSide="left"
        img1src={sec2Img1}
        img2src={sec2Img2}
        img3src={sec2Img3}
        miniBoxH1={main.s2.miniBox.H1}
        miniBoxH2={main.s2.miniBox.H2}
      />
      <MainItem
        sectionH1={main.s3.H1}
        sectionH2={main.s3.H2}
        videosrc={sec3video}
        videoClass="absolute top-[2.9rem] left-[6.7rem] w-[24rem] z-10"
        imgSide="right"
        img1src={sec3Img1}
      />
      <MainItem
        sectionH1={main.s4.H1}
        sectionH2={main.s4.H2}
        imgSide="left"
        img1src={sec4Img1}
      />
    </main>
  );
};

export default Main;
