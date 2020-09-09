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

const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signUp"
};

const Authentication = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const [formState, updateFormState] = useState(initialFormState);  
  const onChange = (e) => {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value }))
  }

  const { formType } = formState;
  
  const signUp = async () => {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email }});
    updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
  }

  const confirmSignUp = async () => {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: "signIn" }))
  }

  const signIn = async () => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: "confirmed"}))
  }

  return (
    <>
      {
        formType === "signUp" && (
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
              <Button fullWidth variant="contained" onClick={signUp}>
                Sign Up
              </Button>
            </form>
            <Divider className={classes.divider} />
            <Grid container justify="space-between">
              <Typography variant="body1">Already have an account?</Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => updateFormState(() => ({
                  ...formState, formType: "signIn"
                }))}
              >
                SIGN IN
              </Button>
            </Grid>
          </Paper>
        )
      }
      {
        formType === "confirmSignUp" && (
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
                onChange={onChange}
              />
              <Button fullWidth variant="contained" onClick={confirmSignUp}>
                Confirm Sign Up
              </Button>
            </form>
          </Paper>
        )
      }
      {
        formType === "signIn" && (
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
              />
              <TextField
                name="password"
                className={classes.field}
                label="Password"
                type="password"
                fullWidth
              />
              <Button fullWidth variant="contained" onClick={signIn}>
                Sign In
              </Button> 
            </form>
            <Divider className={classes.divider} />
            <Grid container justify="space-between">
              <Typography variant="body1">Need an account?</Typography>
              <Button 
                variant="contained" 
                size="small"
                onClick={() => updateFormState(() => ({
                  ...formState, formType: "signUp"
                }))}
              >
                SIGN UP
              </Button>
            </Grid>
          </Paper>
        )
      }
      {
        formType === "confirmed" && (
          <Paper>
            <h1>Signed in!</h1>
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