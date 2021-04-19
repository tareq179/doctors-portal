import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./Components/AllPatients/AllPatients/AllPatients";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import AddDoctor from "./Components/AddDoctor/AddDoctor";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <PrivateRoute path="/allPatients">
            <AllPatients />
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
