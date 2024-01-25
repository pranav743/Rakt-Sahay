import React from "react";
import { Icon } from "@chakra-ui/react";

// importing the icons
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const BottomNav = () => {
  const menu = [
    {
      icon: AiFillHome,
      name: "Home",
    },
    {
      icon: MdPersonSearch,
      name: "Donate",
    },
    {
      icon: BsCardChecklist,
      name: "Request",
    },
    {
      icon: IoMdPerson,
      name: "Profile",
    },
  ];
  return (
    <div className="bottom-navbar">
      <ul className="flex justify-around">
        {menu.map((item) => {
          return (
            <li className="flex flex-col justify">
              {item.name} <Icon as={item.icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomNav;
