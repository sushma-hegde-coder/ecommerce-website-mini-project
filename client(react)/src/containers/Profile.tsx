import React from "react";
import UserService from "../services/UserService";

import { withStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import { flexbox } from "@material-ui/system";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const drawerWidth = 100;

const styles = (theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  profile_detail: {
    display: "flex",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

type State = {
  createdAt: Date; //don't use prodInfo: ProductType..later you can't access individuals after setState
  userEmail: string;
  userId: string;
  userName: string;
};

class Profile extends React.Component<any, any> {
  state: State = {
    createdAt: new Date(),
    userEmail: "",
    userId: "",
    userName: "",
  };

  async componentDidMount() {
    try {
      const { data } = await UserService.profile();
      console.log(data);
      this.setState({
        createdAt: data.createdAt,
        userEmail: data.userEmail,
        userId: data.userId,
        userName: data.userName,
      });
    } catch (e) {
      console.log(e.response.data);
    }
  }

  Hello() {
    console.log("hello");
  }

  extractFirstLetter(name: string) {
    let na: string = name.substring(0, 1);
    return na.toUpperCase();
  }
  render() {
    const { classes, window, theme } = this.props;
    return (
      <div className={classes.profile_detail}>
        <div className={classes.root}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {this.extractFirstLetter(this.state.userName)}
                </Avatar>
              }
              title={"Hello  " + this.state.userName}
            />
          </Card>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={() => this.Hello()}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="MY ORDERS" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="ACCOUNT SETTINGS" />
            </ListItem>
            <ListItem button>
              <ListItemText secondary="Profile Information" />
            </ListItem>
            <ListItem button>
              <ListItemText secondary="Manage Addresse" />
            </ListItem>
            <ListItem button>
              <ListItemText secondary="PAN card information" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            {/* <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink> */}
          </List>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
