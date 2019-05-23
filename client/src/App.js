import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import EditProfile from "./pages/EditProfile"
import Profiles from "./pages/Profiles";
import ProfileDetail from "./pages/ProfileDetail";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/users" component={Profiles} />
          <Route exact path="/users/:id" component={ProfileDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;