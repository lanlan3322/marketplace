import { alpha, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    margin: "10px",
  },
  navbar: {
    background:
      "linear-gradient(90deg, rgb(0, 171, 209) 0%, #1C538A 100%) !important",
    height: "105px",
    minHeight: "105px",
    maxHeight: "105px",
    zIndex: 99,
    //  [theme.breakpoints.down('lg')]: {
    //     marginLeft: '0 !important',
    //     marginTop: '0.5rem !important',
    //     maxWidth: 'initial !important',
    //     minWidth: 'initial !important',
    //     position: 'relative',
    // },
    // [theme.breakpoints.between(901, 959)]: {
    //     flexBasis: '100%',
    //     maxWidth: '60vw'
    // },
    // [theme.breakpoints.down(960)]: {
    //     height: '105px',
    //     minHeight:'105px',
    //     maxHeight:'105px',
    //     zIndex: 99,
    //   },
    [theme.breakpoints.down(900)]: {
      height: "70px",
      minHeight: "70px",
      maxHeight: "70px",
      zIndex: 99,
    },
    [theme.breakpoints.down("xs")]: {
      height: "70px",
      minHeight: "70px",
      maxHeight: "70px",
      zIndex: 99,
    },
  },
  logo: {
    width: "100px",
    [theme.breakpoints.down(960)]: {
      display: "none",
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "6rem",
      float: " left",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "6rem",
      float: " left",
    },
  },
  isoLogo: {
    width: "29px",
    [theme.breakpoints.up(960)]: {
      display: "none",
    },
    [theme.breakpoints.down(960)]: {
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "-2.5rem",
      top: "1.5rem",
      float: " left",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "-1.5rem",
      top: "1.5rem",
      float: " left",
    },
  },
  menuButton: {},
  title: {
    display: "none",
    fontSize: "14px",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      "&:hover": {
        borderBottom: "none",
        color: "#008968",
      },
    },
  },
  link: {
    display: "flex",
    fontSize: "15px",
    font: "Open Sans, sans serif, regular !important",
    color: "#fff",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
    justifyContent: "space-evenly",
    alignItems: "top",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
      textDecorationColor: "transparent",
    },
  },
  lang: {
    fontSize: "14px",
    color: "#fff",
    marginLeft: "7rem",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    textDecorationColor: "transparent",
    alignItems: "right",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
      textDecorationColor: "transparent",
    },
    [theme.breakpoints.between(960, 1230)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none", // remove
      position: "relative",
      float: "left",
      left: "-34rem",
      marginBottom: "-1.5rem",
      top: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "2rem",
      left: "-8rem",
      float: " left",
    },
  },
  langContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  notificon: {
    marginLeft: theme.spacing(2),
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
  },
  carticon: {
    marginLeft: theme.spacing(2),
    alignItems: "center",
    display: "inline-flex",
    float: "right",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
    [theme.breakpoints.down("md")]: {
      left: "-7.5rem",
      // marginTop: '0.5rem',
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      position: "relative",
      float: "right",
      left: "1rem",
      // marginBottom: '-1.5rem',
      top: "-1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      // marginLeft: '11rem',
      top: "-2.5rem",
      left: "9.25rem",
      // marginBottom: '-6rem',
    },
  },
  connect: {
    fontSize: "14px",
    color: "#00ABD1",
    fontWeight: 500,
    textTransform: "none",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: 20,
    marginLeft: "1rem",
    textAlign: "center",
    outline: "none",
    "&:hover": {
      outline: "none",
      borderBottom: "none",
      color: "white",
      background: "#00ABD1",
    },
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    [theme.breakpoints.down(900)]: {
      left: "4rem",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-2.5rem",
      left: "-2rem",
      maxWidth: "75px",
      minWidth: "75px",
      width: "100%",
    },
  },
  connectMobile: {
    fontSize: "14px",
    color: "#00ABD1",
    fontWeight: 500,
    textTransform: "none",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: 20,
    marginLeft: "1rem",
    textAlign: "center",
    outline: "none",
    "&:hover": {
      outline: "none",
      borderBottom: "none",
      color: "white",
      background: "#00ABD1",
    },
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
  },
  listItemText: {
    display: "flex",
    fontSize: "13px",
    fontFamily: "Open Sans, sans serif, regular !important",
    color: "black",
    textDecorationColor: "transparent",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecorationColor: "transparent",
    },
  },
  linkmenu: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
  },
  linkmenuicon: {
    display: "flex",
    size: "18px",
    color: "#000000",
    textDecorationColor: "transparent",
  },
  searchContainer: {
    [theme.breakpoints.down(900)]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  search: {
    position: "relative",
    color: "black",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    maxWidth: "530px",
    minWidth: "530px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0 !important",
      marginTop: "0.5rem !important",
      maxWidth: "initial !important",
      minWidth: "initial !important",
      position: "relative",
    },
    [theme.breakpoints.between(901, 959)]: {
      flexBasis: "100%",
      maxWidth: "60vw",
    },
    [theme.breakpoints.down(960)]: {
      marginTop: "0 !important",
      position: "relative",
      marginLeft: "-2rem",
      maxWidth: "400px",
      minWidth: "400px",
      width: "100%",
      top: "-1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-1.5rem",
      right: "-1rem",
      position: "relative",
      marginLeft: "-4rem",
      maxWidth: "200px",
      minWidth: "200px",
      width: "100%",
    },
  },
  searchIcon: {
    borderLeft: "1px solid #727272",
    borderRadius: "0px",
    marginTop: "-8.5px",
    height: "20px",
    marginRight: "-15px",
    display: "flex",
    color: "#727272",
    backgroundColor: "transparent",
    paddingTop: "-0.65rem",
    paddingLeft: "-2.5rem",
    position: "absolute",
    right: -5,
    top: "15px",
    maxwidth: "13px",
    minWidth: "13px",
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  inputRoot: {
    color: "inherit",
    [theme.breakpoints.down(959)]: {
      width: "100%",
    },
  },
  inputInput: {
    fontWeight: "lighter",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(-1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuProfile: {
    width: "200px",
    backgroundColor: "red",
  },

  menuMobileItemLabel: {
    marginBottom: 0,
  },
  menuMobileItemLink: {
    color: "#000",
    textDecoration: "none",
    "&:hover, &:focus, &:active": {
      color: "#000",
      textDecoration: "none",
    },
  },
  moreIcon: {
    outline: "none",
    marginTop: "-3rem",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    [theme.breakpoints.between(901, 959)]: {
      marginTop: 0,
    },
    [theme.breakpoints.down(900)]: {
      position: "relative",
      top: "-10px",
      left: 0,
      marginTop: 0,
      width: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      top: 0,
    },
  },
  location: {
    width: "21px",
    height: "30px",
    marginTop: "-3px",
    [theme.breakpoints.down("sm")]: {
      display: "none", // remove
      position: "relative",
      float: "left",
      left: "7rem",
      top: "-1rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "2rem",
      bottom: "-2rem",
      left: "-2rem",
      position: "relative",
      // marginLeft: '-4rem',
      size: "75%",
    },
  },
  listItemsMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  quickActionsMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
