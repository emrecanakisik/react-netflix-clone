import AccountMenu from "@/components/browse/nav/AccountMenu";
import NavTab from "@/components/browse/nav/NavTab";
import React from "react";
import bg_img_sample from "public/assets/header-bg.png";
import logo_img_sample from "public/assets/header-film-logo.png";
import Image from "next/image";
import LogoIcon from "@/components/LogoIcon";
import PlayInfoReplayBtn from "@/components/browse/header/PlayInfoReplayBtn";
import SearchBtn from "@/components/browse/nav/SearchBtn";

const BrowseMain = () => {
  return (
    <>
      <header>
        <nav className="absolute min-w-full max-h-[70px] top-0 flex justify-between px-14 py-4 items-center bg-gradient-to-b from-gray-900 z-10">
          <div className="nav-1 flex">
            <a href="" className="mr-6">
              <LogoIcon
                Name="NetflixLogo"
                viewBox="0 0 111 30"
                group={false}
                width="92px"
                classNameSVG="fill-red-600"
              />
            </a>
            <ul className="flex items-center">
              <NavTab title="Home" href="browse" />
              <NavTab title="TV Shows" href="browse/genre/83" />
              <NavTab title="Movies" href="browse/genre/34399" />
              <NavTab title="New & Popular" href="latest" />
              <NavTab title="My List" href="browse/my-list" />
              <NavTab
                title="browse by Languages"
                href="browse/original-audio"
              />
            </ul>
          </div>
          <div className="nav-2 flex items-center ">
            <SearchBtn />
            <NavTab title="Kids" href="Kids" ul={true} />
            <button className="mr-4">
              <LogoIcon
                Name="NotificationIcon"
                viewBox="0 0 24 24"
                group={false}
                width="24"
                height="24"
                fillPATH="white"
              />
            </button>
            <AccountMenu />
          </div>
        </nav>
        <div className="header-video-image-frame h-screen bg-gradient-to-r from-blackOp60 to-85% to-transparent">
          <div className="bg-image-video absolute min-w-full max-h-screen overflow-hidden -z-10">
            <Image
              src={bg_img_sample}
              alt=""
              className="header-bg-img min-w-full top-0"
            />
          </div>
          <div className="filmLogo-texts-btns-ageRestriction relative inline-flex justify-between w-full mt-[12.5vw] pl-16">
            <div className="filmLogo-texts-btns inline-block w-[35vw] /mt-[10vw] /ml-16 bottom-0 ">
              <Image
                src={logo_img_sample}
                alt=""
                className="min-w-full max-h-[15.5vw] mb-[1.25vw]"
              />
              <p className="text-[1.2vw] text-white w-full leading-[1.26vw] drop-shadow-sha2-2-4-45 mb-[1.5vw] cursor-default">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                laborum amet nulla enim est reprehenderit veniam corporis
                voluptatum assumenda possimus tempore!
              </p>
              <div className="play-info-btns flex">
                <PlayInfoReplayBtn title="Play" iconName="PlayIcon" />
                <PlayInfoReplayBtn title="More Info" iconName="InfoIcon" />
              </div>
            </div>
            <div className="replayBtn-ageRestriction flex items-center absolute bottom-0 right-0">
              <PlayInfoReplayBtn
                title="Replay"
                iconName="ReplayIcon"
                iconHeight="1.3"
                iconWidth="1.3"
              />
              <span className="age-restriction text-[1.1vw] py-[0.5vw] pl-[0.8vw] pr-[3.5vw] bg-grayOp60 text-white border-l-[3px] cursor-default">
                18+
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BrowseMain;
