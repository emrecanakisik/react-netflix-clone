import React, { useContext } from "react";
import userimg0 from "/public/assets/browse-users/0.png";
import userimg1 from "/public/assets/browse-users/1.png";
import userimg2 from "/public/assets/browse-users/2.png";
import userimg3 from "/public/assets/browse-users/3.png";
import userimg4 from "/public/assets/browse-users/4.png";
import Image from "next/image";
import BrowseUser from "./components/browse/BrowseUser";
import { Contexts } from "./contexts/LangContext";

const ChooseUser = () => {
  const { userData } = useContext(Contexts);
  console.log(userData.data.profiles);
  const profiles = userData.data.profiles;

  return (
    <div className="w-full min-h-screen pt-44 text-center">
      {/* pt-44 px-96 */}
      <div className=" w-full">
        <h1 className="text-[3.5vw] font-normal mt-11 text-white">
          Who's watching?
        </h1>
        <ul className="flex justify-center text-white mx-48 my-7">
          {profiles?.map((profile: any, index: number) => {
            return (
              <BrowseUser
                profileName={profile.name}
                imgSrc={userimg4}
                imgAlt={0}
                key={index}
              />
            );
          })}
        </ul>
      </div>
      <a
        href="ManageProfiles"
        className="inline-block border text-NetflixMidGray border-NetflixMidGray hover:text-white hover:border-white mt-[2.25vw] py-[.5vw] px-[2vw] text-[1.25vw]"
      >
        Manage Profiles
      </a>
    </div>
  );
};

export default ChooseUser;
