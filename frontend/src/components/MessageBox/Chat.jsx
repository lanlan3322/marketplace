import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./MessageLR";
import ImageIcon from "@material-ui/icons/Image";
import BreadcrumbB from "./BreadcrumbB";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down(900)]: {
      maxWidth: "inherit",
      width: "100%",
    },
  },
  paper: {
    width: "80vw",
    height: "80vh",
    maxWidth: "894px",
    maxHeight: "392px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    marginLeft: "1.75rem",
    borderRadius: "0px 0px 10px 10px",
    [theme.breakpoints.down(900)]: {
      width: "calc(100% - 48px)",
      maxWidth: "initial",
      minWidth: 0,
    },
  },
  link: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginLeft: "0.1rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecorationColor: "transparent",
    },
  },
  paper2: {
    width: "80vw",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBody: {
    width: "calc( 100% - 20px )",
    margin: "10",
    marginTop: "10px",
    overflowY: "scroll",
    height: "calc( 100% - 80px )",
  },
  imageProfile: {
    display: "flex",
    alignItems: "left",
    left: "10px",
    justifyContent: "left",
    marginLeft: "0.25rem",
    marginBottom: "-10px",
    marginTop: "-10px",
    width: "43px",
    height: "43px",
    color: "#bababa",
  },
  listItemText: {
    fontFamily: "Open Sans",
    marginTop: "-5px",
    fontWeight: "bold",
    marginLeft: "5px",
    fontSize: "21px",
  },
  profileBackground: {
    width: "%100",
    maxWidth: "894px",
    minWidth: "894px",
    height: "%100",
    maxHeight: "67px",
    minHeight: "67px",
    marginLeft: "1.75rem",
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    borderRadius: "10px 10px 0px 0px",
    opacity: 1,
    [theme.breakpoints.down(900)]: {
      width: "calc(100% - 48px)",
      maxWidth: "initial",
      minWidth: 0,
    },
  },
}));

export default function Chat(props) {
  const classes = useStyles();
  
  const profileImage = require("../../media/vbuterin.png");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <BreadcrumbB
        handleClick={handleClick}
        classes={classes}
        location={props.location}
      />
      <ListItem className={classes.profileBackground}>
        <ListItemAvatar>
          <ImageIcon className={classes.imageProfile} />
        </ListItemAvatar>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Vitalik Buterin"
        />
      </ListItem>
      <Paper className={classes.paper} zDepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Water striders "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Elon"
            avatarDisp={true}
          />
          <MessageLeft
            message="example2"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Elon"
            avatarDisp={false}
          />
          <MessageRight
            message="message"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Vitalik"
            avatarDisp={true}
          />
          <MessageRight
            message="message"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Vitalik"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </List>
  );
}
