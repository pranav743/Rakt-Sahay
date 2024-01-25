import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center my-4">Profile</h1>
      <div className="pic size-40 rounded-full border-2 border-solid border-[#EA3A60] my-3"></div>
      <div className="accordian w-full max-w-sm mt-4 text-xl">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#EA3A60", color: "white" }}
                fontSize="2xl" // You can adjust the size as needed (lg stands for large)
                padding={4}
              >
                <Box as="span" flex="1" textAlign="left">
                  Personal Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#EA3A60", color: "white" }}
                fontSize="2xl" // You can adjust the size as needed (lg stands for large)
                padding={4}
              >
                <Box as="span" flex="1" textAlign="left">
                  Donation History
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Profile;
