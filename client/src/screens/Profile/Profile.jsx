import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { url } from "../../Global/URL";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { getUserDetails } from "../../Global/authUtils";

const Profile = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(false);
  const { isError, isLoading, data } = useQuery({
      queryKey: [`/user/profile/info`],
      retryDelay: 5000,
      retry: false,
      queryFn: async () => {
          const accessToken = localStorage.getItem("RSaccessToken");
          const data = await getUserDetails();
          console.log(data);
          return data;
      }
  });

  const onError = () => {
    localStorage.removeItem('RSaccessToken');
    navigate('/login');
  }
  
  if (isLoading){
    return (
      <Loader/>
    );
  } else if (isError || !data.email){
    
    return (
      <>
        <h3 style={{marginTop: '50px', width: '100%', textAlign: 'center'}}>Something Went Wrong :(</h3>
        <h2 onClick={onError} style={{marginTop: '50px', width: '100%', textAlign: 'center', color: 'blue'}}>Try Again</h2>
      </>

    )
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center my-4">Profile</h1>
      <div style={{overflow: 'hidden'}} className="pic size-40 rounded-full border-2 border-solid border-[#EA3A60] my-3">
        <img src={data.profilePicture} height={'100%'} width={'100%'} alt="Not Found" />
      </div>
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
