import React from "react";

// Components
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const NavButton = ({ text, path }) => {
  const classes = useStyles();
  
  return (
    <>
      <Button 
        className={classes.nav}
        component={Link}
        to={path}
      >
        {text}
      </Button>
    </>
  )
};

const useStyles = makeStyles(() => ({
  nav: {
    color: "white",
    fontSize: 15,
  }
}));

export default NavButton;