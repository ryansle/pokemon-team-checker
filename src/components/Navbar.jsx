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
  const isMobileScreen = useMediaQuery("(max-width: 530px)");

  return (
    <>
      <AppBar 
        className={isSmallScreen ? "responsive-container" : "container"} 
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
              { !isMobileScreen && <Typography variant="h5" noWrap style={{ paddingLeft: "15px" }}>Pokémon Team Builder</Typography> }
              { isMobileScreen && <Typography variant="h5" noWrap style={{ paddingLeft: "15px" }}>PokéTeam</Typography> }
            </Grid>
          </div>
          <div className="grow" />
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
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default Navbar;