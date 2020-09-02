import React from "react";

// Components
import { 
  AppBar, 
  Toolbar,
  Typography, 
  Grid,
  useMediaQuery
} from "@material-ui/core";
import NavButton from "./NavButton";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Resources
import pokeball from "../resources/PokeBall.svg";

const Navbar = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      <AppBar 
        className={isSmallScreen ? classes.responsiveContainer: classes.container} 
        position="static"
      >
        <Toolbar>
          {/* This is where the pokeball logo should go */}
          <div>
            <Grid container alignItems="center">
              <img 
                src={pokeball} 
                alt="Gotta catch em all!"
                width="60px"
                height="auto"
              />
              { !isSmallScreen && <Typography variant="h5" noWrap style={{ paddingLeft: "15px" }}>Pokémon Team Builder</Typography> }
            </Grid>
          </div>
          <div className={classes.grow} />
          <div>
            <Grid container>
              <NavButton text="Home" path="/" />
              <NavButton text="Teams" path="/teams" />
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px 18vw 15px 18vw",
    backgroundColor: "#282c34",
  },
  responsiveContainer: {
    padding: "15px 0vw 15px 0vw",
    backgroundColor: "#282c34",
  },
  grow: {
    flexGrow: 1,
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default Navbar;