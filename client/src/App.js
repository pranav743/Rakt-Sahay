import React from "react";
import "./App.css";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BottomNav from "./components/bottomNav";
import Splash from "./screens/splash";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Splash />} />
          {/* <Route path="/login-screen" exact component={LoginScreen} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/find-donor" exact component={FindDonorPage} />
          <Route path="/request-donor" exact component={RequestDonorPage} />
          <Route path="/profile" exact component={ProfilePage} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
