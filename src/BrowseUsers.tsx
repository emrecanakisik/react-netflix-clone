import React from "react";
import userimg0 from "/public/assets/browse-users/0.png";
import userimg1 from "/public/assets/browse-users/1.png";
import userimg2 from "/public/assets/browse-users/2.png";
import userimg3 from "/public/assets/browse-users/3.png";
import userimg4 from "/public/assets/browse-users/4.png";
import Image from "next/image";
import BrowseUser from "./components/browse/BrowseUser";

const BrowseUsers = () => {
  return (
    <div className="w-full min-h-screen pt-52 px-96">
      <h1 className="text-[3.5vw] font-normal text-center my-11">
        Who's watching?
      </h1>
      <ul className="flex justify-between">
        <BrowseUser profileName="asd" imgSrc={userimg0} imgAlt={0} />
        <BrowseUser profileName="asd" imgSrc={userimg1} imgAlt={0} />
        <BrowseUser profileName="asd" imgSrc={userimg2} imgAlt={0} />
        <BrowseUser profileName="asd" imgSrc={userimg3} imgAlt={0} />
        <BrowseUser profileName="asd" imgSrc={userimg4} imgAlt={0} />
      </ul>
    </div>
  );
};

export default BrowseUsers;
