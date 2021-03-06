import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: "300px",
    minWidth: "218",
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down(900)]: {
      maxWidth: "initial",
      backgroundColor: "transparent",
      minWidth: 0,
      width: "100%",
      margin: 0,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      zIndex: 10,
      maxHeight: 80,
      top: "40px",
    },
  },
  rootExpanded: {
    maxHeight: "initial",
    [theme.breakpoints.down(900)]: {
      top: "21px",
    },
  },
  subheader: {
    [theme.breakpoints.down(900)]: {
      display: "block",
      backgroundColor: "#F5F5F5",
      paddingTop: "25px",
      top: "40px",
    },
  },
  subheaderExpanded: {
    [theme.breakpoints.down(900)]: {
      paddingTop: 4,
    },
  },
  mobileOverlay: {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(2),
    marginTop: "0.5rem",
    height: "22px",
  },
  outlinedIcon: {
    color: "#393939",
    cursor: "pointer",
    marginLeft: "2rem",
    marginTop: "1rem",
    [theme.breakpoints.down(900)]: {
      marginLeft: "1rem",
    },
  },
  listItemContainer: {
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.down(900)]: {
      padding: "1rem 0",
    },
  },
  listItemContainerExpanded: {
    [theme.breakpoints.down(900)]: {
      paddingTop: "40px",
    },
  },
  HeaderList: {
    marginLeft: "0.5rem",
    font: "Open Sans",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#393939",
    paddingLeft: "-16px",
    [theme.breakpoints.down("xs")]: {
      font: "Open Sans",
      fontSize: "15px",
      fontWeight: "bold",
    },
  },
  listItemText: {
    color: "#6A6A6A",
    marginLeft: "0.5rem",
    fontFamily: "Open Sans",
    marginTop: "-1.2rem",
    marginBottom: "-1rem",
    fontWeight: "200",
    fontSize: "16px",
    textDecorationColor: "transparent",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
    },
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("sidebar");
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    });
    setExpanded(window.innerWidth > 900);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const toggleMenu = () => {
    if (window.innerWidth <= 900) {
      setExpanded(!expanded);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          className={`${classes.subheader} ${
            window.innerWidth <= 900 && expanded
              ? classes.subheaderExpanded
              : ""
          }`}
          component="span"
          id="nested-list-subheader"
        >
          <ListItemIcon>
            <MenuOutlinedIcon
              className={classes.outlinedIcon}
              onClick={toggleMenu}
            />
            {expanded && (
              <ListItemText
                disableTypography
                className={classes.HeaderList}
                primary={t("My account")}
              />
            )}
          </ListItemIcon>
        </ListSubheader>
      }
      className={`${classes.root} ${
        window.innerWidth <= 900 && expanded ? classes.rootExpanded : ""
      }`}
    >
      {expanded && (
        <div
          className={`${classes.listItemContainer} ${
            window.innerWidth <= 900 && expanded
              ? classes.listItemContainerExpanded
              : ""
          }`}
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <CardGiftcardOutlinedIcon
                style={{
                  color: "#6A6A6A",
                  marginLeft: "2rem",
                  marginTop: "-0.3rem",
                  width: "20px",
                  height: "19px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={t("Orders")}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/ordersactive"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("Active")}
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/orderscomplete"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("Complete")}
                />
              </ListItem>
            </List>
          </Collapse>    
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <StorefrontOutlinedIcon
                style={{
                  color: "#6A6A6A",
                  marginLeft: "2rem",
                  marginTop: "-0.3rem",
                  width: "20px",
                  height: "19px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              style={{
                marginLeft: "0.5rem",
                marginBottom: "-0.5rem",
                marginTop: "-0.7rem",
                color: "#6A6A6A",
                fontSize: "16px",
                fontWeight: "200",
              }}
              primary={t("Sales")}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/salesactive"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("Active")}
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/salesinreview"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("In review")}
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/salescomplete"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("Complete")}
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/additem"
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.listItemText}
                  primary={t("Add new product")}
                />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/mailbox">
            <ListItemIcon>
              <DraftsOutlinedIcon
                style={{
                  color: "#6A6A6A",
                  marginLeft: "2rem",
                  marginTop: "-0.3rem",
                  width: "20px",
                  height: "19px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={t("Mailbox")}
            />
          </ListItem>
          <ListItem button component={Link} to="/myinfo">
            <ListItemIcon>
              <PersonOutlineOutlinedIcon
                style={{
                  color: "#6A6A6A",
                  marginLeft: "2rem",
                  marginTop: "-0.3rem",
                  width: "20px",
                  height: "19px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={t("My Info")}
            />
          </ListItem>
        </div>
      )}
      {window.innerWidth <= 900 && expanded && (
        <div className={classes.mobileOverlay} onClick={toggleMenu}></div>
      )}
    </List>
  );
}
