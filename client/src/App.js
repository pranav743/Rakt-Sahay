import React from "react";
import "./App.css";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// // import BottomNav from "./components/bottomNav";
// import Splash from "./screens/splash";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";

function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="/" exact element={<Splash />} /> */}
          {/* <Route path="/login-screen" exact component={LoginScreen} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route component={BottomNav}>
            <Route path="/home" exact component={HomePage} />
            <Route path="/find-donor" exact component={FindDonorPage} />
            <Route path="/request-donor" exact component={RequestDonorPage} />
            <Route path="/profile" exact component={ProfilePage} />
          </Route> */}
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
  );
}

export default App;
