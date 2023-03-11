import React, { FC } from "react";
type footerItemTitle = { title: string };
const FooterItem: FC<footerItemTitle> = ({ title }) => {
  return (
    <li className="w-52 mr-3 mb-4">
      <a href="#" className="text-sm hover:underline">
        {title}
      </a>
    </li>
  );
};

export default FooterItem;
