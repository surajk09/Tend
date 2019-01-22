import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

import AdminDashboard from "./screens/AdminDashboard";
import UserDashboard from "./screens/UserDashboard";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AdminMain from "./screens/Admin/AdminMain";
import userList from "./screens/UserList";
class App extends React.Component {
  // componentDidMount() {
  //   alert("hi")
  // }
  render() {
    return (
      <div className="App">
        <Route path="/AdminDashboard" component={AdminDashboard} exact />
        <Route path="/UserDashboard" component={UserDashboard} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/UserList" component={userList} exact />
        <Route path="/AdminMain" component={AdminMain} exact />
        
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
