import React from "react";
import "./App.css";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import BottomNav from "./components/bottomNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={SplashScreen} />
          <Route path="/login-screen" exact component={LoginScreen} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route component={BottomNav}>
            <Route path="/home" exact component={HomePage} />
            <Route path="/find-donor" exact component={FindDonorPage} />
            <Route path="/request-donor" exact component={RequestDonorPage} />
            <Route path="/profile" exact component={ProfilePage} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
