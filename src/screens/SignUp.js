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
import firebase from "../Firebase";

class SignUp extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Users");
    this.state = {
      email: "",
      fullName: "",
      password: ""
    };
  }
  //state = { visible: true };
  // componentDidMount() {
  //   alert("hi")
  //   alert("hi")
  // }
  //   alert("hi")

  onChange = e => {
    console.log("enter");
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  nSubmit = e => {
    e.preventDefault();
    const { email, fullName, password } = this.state;
    this.ref
      .add({
        email,
        fullName,
        password
      })
      .then(docRef => {
        this.state = {
          email: "",
          fullName: "",
          password: ""
        };
        this.props.history.push("/Login");
      })
      .catch(error => {
        console.error("Error Occured :", error);
      });
  };
  render() {
    const { email, fullName, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            class="form-control"
            name="email"
            value={email}
            onChange={this.onChange}
            placeholder="Enter Valid Email"
          />
          <br />
          <br />
          <input
            type="text"
            class="form-control"
            name="fullName"
            value={fullName}
            onChange={this.onChange}
            placeholder="Enter Full Name"
          />
          <br />
          <br />
          <input
            type="password"
            class="form-control"
            name="password"
            value={password}
            onChange={this.onChange}
            placeholder="Enter password"
          />
          <br />
          <br />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </form>
      </div>
    ); //return <SignUpForm />;
  }
}

const SignUpForm = () => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
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
              Sign Up
            </Header>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-Password"
              type="password"
            />
            <Button color="blue" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>

        <Link
          to={{
            pathname: "/Login"
          }}
        >
          <Message>Already account?</Message>
        </Link>
      </Grid.Column>
    </Grid>
  </div>
);

export default SignUp;
