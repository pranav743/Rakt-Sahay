import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Center, Square, Circle, Box, Divider ,Card,CardBody,Flex,Text,Divider} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { url } from "../../Global/URL";
import LOGO from "../../Images/LOGO.jpeg"
import showToast from "../../Global/Toast";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const googleAuth = () => {
    if (isChecked) {
      // Perform the login action
      window.location.href = url + "/login";
    } else {
      showToast(toast, "", "info", "Please Accept Terms and Conditions !");
      console.log("Please accept the terms and conditions.");
    }
  };

  return (
    <div>
          <img src={LOGO} className="rounded-full w-[50%] mx-auto mt-16 border-solid border-2 border-[#EA3A60] shadow-lg  "/>
          <Card
          maxW="sm"
          border="1px solid #EA3A60"
          justifyContent="center"
          justifyItems="center"
          padding={2}
          marginTop='10%'
        >
          <CardBody
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            padding={1}
          >
          <Center>
          <Flex direction="column">
                <Text className="font-bold text-2xl ml-4">Welcome to ,<span className="text-red-500">RaktSahay</span></Text>
                <Text className="font-semibold text-xs ml-10">(Saving <span className="text-green-500">Lifes</span> One <span className="text-red-700">Drop </span>At A Time)</Text>
                  <div className="w-full h-0.5 bg-[#EA3A60] rounded-full mt-2"></div>
                <GoogleButton onClick={googleAuth} className="mt-5 mx-auto" />
          </Flex>
          </Center>
          </CardBody>
        </Card>
    </div>

  );
};

export default Login;
