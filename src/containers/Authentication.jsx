import React, { useState, useEffect } from "react";

// Components
import { 
  Paper, 
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
  useMediaQuery 
} from "@material-ui/core";
import { Auth, Hub } from "aws-amplify";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../utils/use-auth";

const Authentication = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const auth = useAuth();

  const onChange = (e) => {
    e.persist();
    auth.updateFormState(() => (
      {...auth.formState, [e.target.name]: e.target.value }
    ))
  }

  return (
    <>
      {
        auth.formType === "signUp" && (
          <Paper
            className={isSmallScreen ? classes.responsivePaper : classes.paper}
            elevation={24}
          >
            <Typography variant="h6">Create a new account</Typography>
            <form noValidate autoComplete="off">
              <TextField
                name="username"
                className={classes.field}
                label="Username"
                type="text"
                fullWidth
                onChange={onChange}
              />
              <TextField
                name="email"
                className={classes.field}
                label="Email Address"
                type="email"
                fullWidth
                onChange={onChange}
              />
              <TextField
                name="password"
                className={classes.field}
                label="Password"
                type="password"
                fullWidth
                onChange={onChange}
              />  
              <TextField
                className={classes.field}
                label="Confirm Password"
                type="password"
                fullWidth
                onChange={onChange}
              />  
              <Button fullWidth variant="contained" onClick={() => auth.signUp()}>
                Sign Up
              </Button>
            </form>
            <Divider className={classes.divider} />
            <Grid container justify="space-between">
              <Typography variant="body1">Already have an account?</Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => auth.updateFormState(() => ({
                  ...auth.formState, formType: "signIn"
                }))}
              >
                SIGN IN
              </Button>
            </Grid>
          </Paper>
        )
      }
      {
        auth.formType === "confirmSignUp" && (
          <Paper
            className={isSmallScreen ? classes.responsivePaper : classes.paper}
            elevation={24}
          >
            <Typography variant="h6">Confirm your account</Typography>
            <form noValidate autoComplete="off">
              <TextField
                name="authCode"
                className={classes.field}
                label="Confirmation Code"
                type="text"
                fullWidth
                onChange={auth.onChange}
              />
              <Button fullWidth variant="contained" onClick={auth.confirmSignUp}>
                Confirm Sign Up
              </Button>
            </form>
          </Paper>
        )
      }
      {
        auth.formType === "signIn" && (
          <Paper
            className={isSmallScreen ? classes.responsivePaper : classes.paper}
            elevation={24}
          >
            <Typography variant="h6">Sign in to your account</Typography>
            <form noValidate autoComplete="off">
              <TextField
                name="username"
                className={classes.field}
                label="Username"
                type="text"
                fullWidth
                onChange={onChange}
              />
              <TextField
                name="password"
                className={classes.field}
                label="Password"
                type="password"
                fullWidth
                onChange={onChange}
              />
              <Button fullWidth variant="contained" onClick={() => auth.signIn()}>
                Sign In
              </Button> 
            </form>
            <Divider className={classes.divider} />
            <Grid container justify="space-between">
              <Typography variant="body1">Need an account?</Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => auth.updateFormState(() => ({
                  ...auth.formState, formType: "signUp"
                }))}
              >
                SIGN UP
              </Button>
            </Grid>
          </Paper>
        )
      }
      {
        auth.formType === "confirmed" && (
          <Paper>
            <h1>Signed in!</h1>
            <Button 
              variant="contained"
              onClick={() => Auth.signOut()}
            >
              Logout
            </Button>
          </Paper>
        )
      }
    </>
  )
};

const useStyles = makeStyles(() => ({
  responsivePaper: {
    margin: "45px 18vw 15px 18vw",
    backgroundColor: "#f5f5f5",
    padding: "30px 60px 30px 60px",
  },
  paper: {
    margin: "45px 32vw 15px 32vw",
    backgroundColor: "#f5f5f5",
    padding: "30px 60px 30px 60px",
  },
  field: {
    margin: "1vh 0 2vh 0"
  },
  divider: {
    margin: "2vh 0 2vh 0",
    height: 2,
  }
}));

export default Authentication;