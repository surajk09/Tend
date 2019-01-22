import React from "react";
import ReactDOM from "react-dom";
import firebase from "../Firebase";

class userList extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Users");
    this.unsubscribe = null;
    this.state = {
      Users: []
    };
  }
  onCollectionUpdate = querySanpshot => {
    const Users = [];
    querySanpshot.forEach(doc => {
      const { email, fullName, password } = doc.data();
      Users.push({
        key: doc.id,
        doc,
        email,
        fullName,
        password
      });
    });
    this.setState({
      Users
    });
  };
  componentDidMount() {
    console.log("data");
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div>
        <h2>user list</h2>
        <br />
        <br />
        <table border="1">
          <thead>
            <tr>
              <th>email</th>
              <th>fullName</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Users.map(User => (
              <tr>
                <td>{User.email}</td>
                <td>{User.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default userList;
