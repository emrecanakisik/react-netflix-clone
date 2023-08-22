import Image from "next/image";
import React from "react";
import userimg1 from "/public/assets/browse-users/1.png";
import DropdownProfileItem from "./DropdownProfileItem";

const AccountMenu = () => {
  return (
    <div className="account-menu relative group inline">
      <div className="account-btn inline-flex items-center group-hover:mb-3 duration-300">
        <Image src={userimg1} alt="" height={32} className="rounded" />
        <i className="fa-solid fa-caret-up fa-rotate-180 group-hover:rotate-0 ease-in-out duration-300 ml-2 text-white text-xs"></i>
      </div>
      <div className="dropdown-menu absolute hidden group-hover:block w-52 right-0 p-1 pt-3 bg-black">
        <div className="absolute -top-2 right-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
        <DropdownProfileItem
          title="11111"
          picType="png-jpg"
          picSrc={userimg1}
        />
        <DropdownProfileItem
          title="22222"
          picType="png-jpg"
          picSrc={userimg1}
        />
        <DropdownProfileItem
          title="33333"
          picType="png-jpg"
          picSrc={userimg1}
        />
        <DropdownProfileItem
          title="Manage Profiles"
          picType="svg"
          iconName="DropManageProfsIcon"
        />
        <DropdownProfileItem
          title="Transfer Profile"
          picType="svg"
          iconName="DropProfTransferIcon"
        />
        <DropdownProfileItem
          title="Account"
          picType="svg"
          iconName="DropAccountIcon"
        />
        <DropdownProfileItem
          title="Help Center"
          picType="svg"
          iconName="DropHelpIcon"
        />
        <hr className="border-gray-600" />
        <button className="text-[13px] text-white hover:underline p-3.5 min-w-full">
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
};

export default AccountMenu;
