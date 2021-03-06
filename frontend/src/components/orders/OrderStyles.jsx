import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
    width: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
  inline: {
    fontFamily: "Open Sans",
    display: "flex",
    marginTop: "-0.5rem",
    height: "30px",
  },
  listItem: {
    borderRadius: "20px",
    height: "117px",
    backgroundColor: "white",
    fontFamily: "Open Sans",
    alignItems:"flex-start",
    width: "100%",
    maxWidth: "335px",
  },
  listItemText: {
    fontFamily: "Open Sans",
    marginLeft: "0px",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "15px",
    },
  },
  btnCheckOrder: {
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    textTransform: "none",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    minWidth: "140px",
    maxWidth: "140px",
    top: "-0.5rem",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btnBuyAgain: {
    display: "flex",
    fontWeight: "500",
    textTransform: "none",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    borderRadius: "10px",
    minWidth: "140px",
    maxWidth: "140px",
    backgroundColor: "#d4ecf1",
    color: "#00ABD1",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
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
  image: {
    width: "100px",
    height: "80px",
    borderRadius: "10px",
    marginLeft: "1.25rem",
    marginRight: "0.75rem",
    color: "#bababa",
  },
  buttonThreeDots: {
    outline: "none",
    display: "flex",
    maxBlockSize: "50px",
    width: 50,
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  escrowTimer: {
    [theme.breakpoints.down('xs')]: {
      height: "126px !important",
     },
  },
  Price: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    color: "#323232"
  },
  PriceFiat: {
    color:"#BABABA",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    marginLeft:"5px"
  },
  itemSectionGrid: {
    marginTop: "4px",
    height: "100%",
    maxHeight: "160px",
    marginLeft: "-15px",
    display: "contents",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "35px",
      position: "relative",
      top: "50px",
     },
  },
  indItemGrid: {
    backgroundColor:"white",
    borderRadius:"5px",
    height: "100%",
    maxHeight: "180px",
    minHeight: "180px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    [theme.breakpoints.down(1600)]: {
        height: "100%",
        maxHeight: "180px",
        },
    [theme.breakpoints.down(1160)]: {
        height: "100%",
        maxHeight: "282px",
        minHeight: "282px",
        marginTop: "104px",
        },
    [theme.breakpoints.down(600)]: {
        height: "100%",
        maxHeight: "280px",
        minHeight: "280px",
        width: "100%",
        maxWidth: "476px",
        position: "relative",
        marginTop: "0px",
        marginLeft: "5px",
      },
    [theme.breakpoints.down(400)]: {
        height: "100%",
        width: "100%",
        maxWidth: "355px",
        maxHeight: "450px",
        position: "relative",
        marginTop: "15px",
      }, 
  },
  itemDescrGrid: {
    flexDirection:"row",
    backgroundColor: "transparent",
    borderRadius: "20px",
    marginBottom: "8px",
    height: "100%",
    marginLeft: "0.75rem",
    width: "100%",
    maxWidth: "344px",
    [theme.breakpoints.down(1600)]: {
        height: "100%",
        maxHeight: "130px",
        },
    [theme.breakpoints.down(400)]: {
      width: "100%",
      maxWidth: "190px",
      }, 
  },
  itemName: {
    display: "inline-flex",
    alignItems: "center",
    lineHeight: "20px",
    marginTop:"8px"

  },
  escNdbuttonGrid: {
    justifyContent:"flex-end",
    fleDirection:"row",
    alignItems:"center",
    display: "flex",
    [theme.breakpoints.down(600)]: {
        display:"flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        marginTop: "-47px"
      },
  },
  menuMobileIcon: {
    cursor: "pointer",

    display: "none",
    paddingRight: 0,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      "&:hover, &:active, &:focus": {
        // color: '#000',
        textDecoration: "none",
        outline: "none",
      },
    },
  },
  menuIconLink: {
    color: "#000",
    textDecoration: "none",
    "&:hover, &:active, &:focus": {
      color: "#000",
      textDecoration: "none",
      outline: "none",
    },
  }, 
}));

export default styles;