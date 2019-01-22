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
  Label,
  Card,
  Menu,
  Sidebar,
  Modal
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

class UserDashboard extends React.Component {
  state = {
    visible: true,
    articles: []
  };

  componentDidMount() {
    this.GetNews();
  }

  GetNews = () => {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("a0bf2084cc834adcadcd355e5689fd9b");

    newsapi.v2
      .topHeadlines({
        sources: "google-news-in" //,the-times-of-india",
      })
      .then(response => {
        //console.log(response.articles);
        this.setState({ articles: response.articles });
      });
  };
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <UserDashboardSide />
            </td>
            <td>
              <Card.Group itemsPerRow={4}>
                {this.state.articles.map(user => {
                  return <NewsCard1 user={user} />;
                })}
              </Card.Group>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
const UserDashboardSide = () => (
  <Menu inverted icon="labeled" vertical>
    <Menu.Item name="gamepad" active={"gamepad"}>
      <Icon name="gamepad" />
      Games
    </Menu.Item>

    <ModalExampleTopAligned />

    <Menu.Item name="video play" active={"video play"}>
      <Icon name="video play" />
      Videos
    </Menu.Item>
  </Menu>
);
const NewsCard = props => {
  console.log(props);
  return (
    //extra = { extra }
    <div>
      <Card
        image={props.user.urlToImage}
        header={props.user.source.name}
        meta={props.user.source.name}
        description={props.user.title}
      />
    </div>
  );
};
const NewsCard1 = props => {
  console.log(props);
  return (
    //extra = { extra }
    <div>
      <Card>
        <Image src={props.user.urlToImage} />
        <Card.Content>
          <Card.Description>{props.user.title} </Card.Description>
          <Card.Meta>
            <span>{props.user.source.name}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};
const ModalExampleTopAligned = () => (
  <Modal
    trigger={
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Favorite{" "}
      </Menu.Item>
    }
    centered={false}
    closeOnDimmerClick="false"
  >
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> No
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);
export default UserDashboard;
