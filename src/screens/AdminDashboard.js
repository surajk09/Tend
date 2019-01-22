import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

import userList from "./UserList";

class AdminDashboard extends React.Component {
  state = { visible: true, user: [] };
  // componentDidMount() {
  //   alert("hi")
  //   alert("hi")
  // }
  //   alert("hi")

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Sidebar.Pushable Style="height:750px">
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width=""
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <div>
              {" "}
              <userList />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AdminDashboard;
