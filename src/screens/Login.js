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
  Icon,
  Label
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import firebase from "../Firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Users");
    this.unsubscribe = null;
    this.state = {
      Users: [],
      email: "",
      fullName: "",
      password: "",
      ErrorMsgShow: false
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
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  Login = () => {
    const UserList = this.state.Users;
    const txtemail = this.state.email;
    const txtpassword = this.state.password;

    this.setState({ ErrorMsgShow: false });

    if (txtemail === "" && txtemail === "") {
      this.setState({ ErrorMsgShow: true });
    } else {
      const LoggedinUser = UserList.filter(
        item => item.email === txtemail && item.password === txtpassword
      );
      console.log(LoggedinUser);
      if (LoggedinUser.length > 0) {
        if (LoggedinUser[0].email === "admin@admin.com") {
          this.props.history.push("/AdminDashboard");
        } else {
          this.props.history.push("/UserDashboard");
        }
      } else {
        this.setState({ ErrorMsgShow: true });
      }
    }
  };

  render() {
    const { email, fullName, password } = this.state;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <ErrorMessage ErrorMsgShow={this.state.ErrorMsgShow} />
            <Image
              src={require("../assets/img/logo.png")}
              Style="margin:auto"
              size="small"
              wrapped
            />
            <br />
            <br />
            <Form size="large">
              <Segment stacked>
                <Header as="h2" color="blue" textAlign="center">
                  Log-in
                </Header>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />

                <Button color="blue" fluid size="large" onClick={this.Login}>
                  Login
                </Button>
                <br />
                {/* <Button color="google plus">
              <Icon name="google plus" /> Gmail
            </Button>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button> */}
              </Segment>
            </Form>
            <Message>
              New user?
              <Link
                to={{
                  pathname: "/SignUp"
                }}
                Style="padding-left:5px"
              >
                Sign Up
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const ErrorMessage = props => {
  if (props.ErrorMsgShow === true) {
    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p>Please enter the correct username and password to login.</p>
      </Message>
    );
  } else {
    return (
      <Message negative hidden>
        <Message.Header>Error</Message.Header>
        <p>Please enter the correct username and password to login.</p>
      </Message>
    );
  }
};
export default Login;
