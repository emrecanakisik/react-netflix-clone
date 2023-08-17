import NetflixLogo from "@/components/NetflixLogo";
import NotificationLogo from "@/components/NotificationLogo";
import SearchLogo from "@/components/SearchLogo";
import AccountMenu from "@/components/browse/nav/AccountMenu";
import NavTab from "@/components/browse/nav/NavTab";
import React from "react";

const BrowseMain = () => {
  return (
    <>
      <nav className="absolute min-w-full max-h-[70px] top-0 flex justify-between px-14 py-4 items-center bg-gradient-to-b from-gray-900">
        <div className="nav-1 flex">
          <a href="" className="mr-6">
            <NetflixLogo width="92px" />
          </a>
          <ul className="flex items-center">
            <NavTab title="Home" href="browse" />
            <NavTab title="TV Shows" href="browse/genre/83" />
            <NavTab title="Movies" href="browse/genre/34399" />
            <NavTab title="New & Popular" href="latest" />
            <NavTab title="My List" href="browse/my-list" />
            <NavTab title="browse by Languages" href="browse/original-audio" />
          </ul>
        </div>
        <div className="nav-2 flex items-center ">
          <button className="mr-4">
            <SearchLogo />
          </button>
          <NavTab title="Kids" href="Kids" ul={true} />
          <button className="mr-4">
            <NotificationLogo />
          </button>
          <AccountMenu />
        </div>
      </nav>
    </>
  );
};

export default BrowseMain;
