import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
  inline: {
    fontFamily: "Open Sans",
    display: "flex",
  },
  listItem: {
    borderRadius: "20px",
    height: "117px",
    backgroundColor: "white",
    fontFamily: "Open Sans",
  },
  listItemText: {
    fontFamily: "Open Sans",
    marginLeft: "20px",
  },
  btnDetails: {
    display: "flex",
    alignItems: "center",
    right: "2rem",
    fontWeight: "500",
    textTransform: "none",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    marginBottom: "5px",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    minWidth: "140px",
    maxWidth: "140px",
    top: "-2.5rem",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginTop: "-0.03rem",
    marginLeft: "0.4rem",
    marginRight: "-0.75rem",
    justifyContent: "space-evenly",
    padding: theme.spacing(1),
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecorationColor: "transparent",
    },
  },
  menuIconLink: {
    color: "#000",
    textDecoration: "none",
    "&:hover, &:active, &:focus": {
      color: "#000",
      textDecoration: "none",
    },
  },
  menuMobileIcon: {
    cursor: "pointer",
    display: "none",
    paddingRight: 0,
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { t, i18n } = useTranslation("salescomplete");
  const completeImage = require("../../media/canoneos.jpg");
  const handleClick = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMobileMenuOpt = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMobileMenuOpt = () => {
    setAnchorEl(null);
  };

  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <Breadcrumbs
        style={{ marginTop: "-0.75rem" }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link
          className={classes.link}
          style={{ color: "#808080" }}
          onClick={handleClick}
        >
          {t("Sales")}
        </Link>
        <Link
          className={classes.link}
          to="/salescomplete"
          onClick={handleClick}
          aria-current="page"
          style={{ marginLeft: "-0.2rem" }}
        >
          {t("Complete")}
        </Link>
      </Breadcrumbs>
      <Grid
        container
        spacing={1}
        variant="fullWidth"
        direction="column"
        justifyContent="space-around"
        alignItems="left"
        style={{ marginTop: "4px" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: "8px",
            height: "117px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img
                alt="{imgjson}"
                className={classes.image}
                src={completeImage.default}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}> {t("Delivered on")} {" "}</b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Canon EOS Rebel T7 EF-S 18-55mm
                  </Typography>
                  {" "} {t("item")}

                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
                  </Button>
                </React.Fragment>
              }
            />
            <IconButton
              onClick={openMobileMenuOpt}
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="more-menu"
              keepMounted
              anchorEl={anchorEl}
              onClose={closeMobileMenuOpt}
              open={Boolean(anchorEl)}
            >
              <MenuItem className={classes.menuIcons}>
                <Link
                  className={classes.menuIconLink}
                  to="/salescompletedetails"
                >
                  {t("Details")}
                </Link>
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: "8px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemAvatar>
              <img
                alt="{imgjson}"
                className={classes.image}
                src={completeImage.default}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}> {t("Delivered on")} {" "}</b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Canon EOS Rebel T7 EF-S 18-55mm
                  </Typography>
                    {" "} {t("item")}

                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
                  </Button>
                </React.Fragment>
              }
            />
            <IconButton
              onClick={openMobileMenuOpt}
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="more-menu"
              keepMounted
              anchorEl={anchorEl}
              onClose={closeMobileMenuOpt}
              open={Boolean(anchorEl)}
            >
              <MenuItem className={classes.menuIcons}>
                <Link
                  className={classes.menuIconLink}
                  to="/salescompletedetails"
                >
                  {t("Details")}
                </Link>
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemAvatar>
              <img
                alt="{imgjson}"
                className={classes.image}
                src={completeImage.default}
              />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}> {t("Delivered on")} {" "}</b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Canon EOS Rebel T7 EF-S 18-55mm
                  </Typography>
                    {" "} {t("item")}

                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
                  </Button>
                </React.Fragment>
              }
            />
            <IconButton
              onClick={openMobileMenuOpt}
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="more-menu"
              keepMounted
              anchorEl={anchorEl}
              onClose={closeMobileMenuOpt}
              open={Boolean(anchorEl)}
            >
              <MenuItem className={classes.menuIcons}>
                <Link
                  className={classes.menuIconLink}
                  to="/salescompletedetails"
                >
                  {t("Details")}
                </Link>
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
      </Grid>
    </List>
  );
}
