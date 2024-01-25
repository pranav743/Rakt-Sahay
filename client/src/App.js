import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// // import BottomNav from "./components/bottomNav";
// import Splash from "./screens/splash";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import NewProfile from "./screens/newProfile/newProfile";
import Profile from "./screens/Profile/Profile";
import BottomNav from "./components/bottomNav";
import Wrapper from "./components/Wrapper";
import RedirectionPage from "./Global/redirection";
import Splash from "./screens/Splash/splash";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/new-profile" exact element={<NewProfile />} />
          <Route path="/user-profile" exact element={<Profile />} />
          {/* <Route path="/" exact element={<Splash />} />
           */}
          {/* <Route path="/login-screen" exact component={LoginScreen} />
          <Route component={BottomNav}>
            <Route path="/home" exact component={HomePage} />
            <Route path="/find-donor" exact component={FindDonorPage} />
            <Route path="/request-donor" exact component={RequestDonorPage} />
          </Route> */}
          {/* <Route
            path="/redirection/:accessToken"
            element={<RedirectionPage />}
          /> */}
        </Routes>
      </Wrapper>
      <BottomNav />
    </Router>
  );
}

export default App;
