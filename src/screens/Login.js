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

class Login extends React.Component {
  state = { visible: true };

  render() {
    return <LoginForm />;
  }
}
const LoginForm = () => (
  <div className="login-form">
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
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
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
export default Login;
