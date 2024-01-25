import React from "react";
import { Icon } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

// importing the icons
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const BottomNav = ({ selection = "Home" }) => {
  const location = useLocation();
  console.log(location.pathname);
  const checkPage = () => {
    if (location.pathname === "/login") {
      return false;
    } else if (location.pathname === "/new-profile") {
      return false;
    } else {
      return true;
    }
  };

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
    checkPage() && (
      <div className="bottom-navbar p-4 bg-white pb-4 border-solid border-[#EA3A60] border-t-4 rounded-t-3xl fixed w-full bottom-0">
        <ul className="flex justify-around">
          {menu.map((item) => {
            return (
              <li
                key={item.name}
                className="flex flex-col justify-center items-center"
              >
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
    )
  );
};

export default BottomNav;
