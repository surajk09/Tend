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
import GoogleLogin from "react-google-login";
import "./styles.css";

class App extends React.Component {
  // componentDidMount() {
  //   alert("hi")
  // }
  render() {
    return (
      <div className="App">
        <LoginForm />
        <SignUpForm />
      </div>
    );
  }
}
const SignUpForm = () => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image
          src={require("./assets/img/logo.png")}
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
        <Message>Already account?</Message>
      </Grid.Column>
    </Grid>
  </div>
);
const LoginForm = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image
          src={require("./assets/img/logo.png")}
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
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <GoogleLogin
              clientId="355365131093-ser0nsqsmca8ms6jdfiqabifi25hr0mf.apps.googleusercontent.com "
              buttonText="Google Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
            <br />
            <Button color="blue" fluid size="large">
              Login
            </Button>
            <br />
            <Button color="google plus">
              <Icon name="google plus" /> Gmail
            </Button>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button>
          </Segment>
        </Form>
        <Message>
          New to user? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);
const responseGoogle = response => {
  console.log(response);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
