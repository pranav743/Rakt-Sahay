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
import BottomNav from "./components/bottomNav";
import Wrapper from "./components/Wrapper";
import Splash from "./screens/Splash/splash";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" exact element={<Splash />} />
          <Route path="/login" exact element={<Login />} />
          {/* <Route path="/login-screen" exact component={LoginScreen} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route component={BottomNav}>
            <Route path="/home" exact component={HomePage} />
            <Route path="/find-donor" exact component={FindDonorPage} />
            <Route path="/request-donor" exact component={RequestDonorPage} />
            <Route path="/profile" exact component={ProfilePage} />
          </Route> */}
        </Routes>
      </Wrapper>
      <BottomNav />
    </Router>
  );
}

export default App;
