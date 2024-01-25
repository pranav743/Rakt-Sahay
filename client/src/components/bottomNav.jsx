import React from "react";
import { Icon } from "@chakra-ui/react";

// importing the icons
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const BottomNav = ({ selection = "Home" }) => {
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
    <div className="bottom-navbar p-4 mb-2 border-solid border-red-500 border-t-2 fixed w-full bottom-0">
      <ul className="flex justify-around">
        {menu.map((item) => {
          return (
            <li className="flex flex-col justify-center items-center">
              <Icon
                as={item.icon}
                color={selection === item.name ? "red.500" : ""}
                boxSize={6}
              />{" "}
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomNav;
