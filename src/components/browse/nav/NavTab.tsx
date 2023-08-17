import React, { FC } from "react";

const NavTab: FC<{ title: string; href: string; ul?: boolean }> = ({
  title,
  href,
  ul = false,
}) => {
  return ul === true ? (
    <a
      href={`/${href}`}
      className="mr-4 text-sm text-E5 font-medium hover:text-B3 duration-[400ms]"
    >
      {title}
    </a>
  ) : (
    <li className="group ml-5">
      <a
        href={`/${href}`}
        className="text-sm text-E5 group-hover:text-B3 font-medium duration-[400ms]"
      >
        {title}
      </a>
    </li>
  );
};

export default NavTab;
