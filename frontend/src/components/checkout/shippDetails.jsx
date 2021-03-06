import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  deliveryTitle: {
    fontSize: "18px !important",
    color: "#BABABA !important",

  },
  newDelivAdd: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#BABABA",
    height: "27px",
    marginTop: "-26px",
    marginLeft: "6px",
  },
  editDefaultAddress: {
    fontSize: "14px !important",
    color: "#00ABD1",
    position:"relative",
    top: "-7px",
    textTransform: "none",
  },
  borderDefAddress: {
    border: "1px solid #323232",
    boxSizing: "border-box",
    borderRadius: "5px",
    height: "33px"
  },
  borderNewAddress: {
    border: "1px solid #BABABA",
    boxSizing: "border-box",
    borderRadius: "5px",
    height: "230px",
    marginTop: "10px",
    [theme.breakpoints.down(1600)]: {
      height: "270px",
    },
    [theme.breakpoints.down(1200)]: {
      height: "390px",
    },
    [theme.breakpoints.down('xs')]: {
      height: "400px",

    },
  },
  radioDefaultAddress: {
    marginTop: "-3px !important",
    marginLeft:"8px !important",
    '&.Mui-checked': {
        color: "#00ABD1 !important",
      },
  },
  radioNewAddress: {
    marginLeft:"8px !important",
    '&.Mui-checked': {
        color: "#00ABD1 !important",
      },
  },
  textStreet: {
    marginTop: "6px",
    marginLeft: "4px",
    width: "100%",
    maxWidth: "500px",
    '& label.Mui-focused': {
    color: '#00ABD1',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00ABD1',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#00ABD1',
    },
  },
    [theme.breakpoints.down(1200)]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: "300px",
    },
    
  },
  textRest: {
    marginTop: "2px",
    marginLeft: "3px",
    '& label.Mui-focused': {
    color: '#00ABD1',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00ABD1',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#00ABD1',
      },
    },
  },
}));

export default function ShippDetails() {
    const classes = useStyles();
    const { t, i18n } = useTranslation("shippDetails");
    

return (
  <FormControl>
                <FormLabel disableTypography className={classes.deliveryTitle} id="address">{t("Select delivery location")}</FormLabel>
                <RadioGroup
                  aria-labelledby="deliveryLocations"
                  defaultValue="defaultAddress"
                  name="radio-buttons-group"
                >
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.borderDefAddress}>
                    <FormControlLabel
                      value="defaultAddress"
                      control={<Radio className={classes.radioDefaultAddress}
                      />}
                      label={t("Default address")}
                      style={{ top: "-3px", position: "relative" }}
                    />

                    <Button className={classes.editDefaultAddress}>{t("Edit address")}</Button>
                  </Grid> 
                  <div className={classes.borderNewAddress}>
                    <FormControlLabel
                      value="newAddress"
                      control={<Radio className={classes.radioNewAddress}/>}
                      label={t("New Address")}
                    />
                    <LocalShippingIcon />
                    <DialogTitle
                      disableTypography
                      className={classes.newDelivAdd}
                      id="form-dialog-title"
                    >
                      {t("New delivery address")}
                    </DialogTitle>
                    <DialogContent >
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Street")}
                        variant="outlined"
                        type="text"
                        fullWidth
                        className={classes.textStreet}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Number")}
                        variant="outlined"
                        type="numbers"
                        width="204px"
                        className={classes.textRest}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Apartment/House(Optional)")}
                        variant="outlined"
                        type="text"
                        width="204px"
                        className={classes.textRest}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Zip Code")}
                        variant="outlined"
                        type="text"
                        width="204px"
                        className={classes.textRest}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("City")}
                        variant="outlined"
                        type="text"
                        width="204px"
                        className={classes.textRest}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Province/State")}
                        variant="outlined"
                        type="province"
                        width="204px"
                        className={classes.textRest}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Country")}
                        variant="outlined"
                        type="country"
                        width="204px"
                        className={classes.textRest}
                      />
                    </DialogContent>
                  </div>
                </RadioGroup>
              </FormControl>
    );
}