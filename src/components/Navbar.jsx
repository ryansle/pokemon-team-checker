import React, { useState } from "react";

// Components
import { 
  AppBar, 
  Toolbar,
  Typography, 
  Grid,
  IconButton,
  Modal,
  useMediaQuery
} from "@material-ui/core";
import NavButton from "./NavButton";
import Authentication from "./Authentication"

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Resources
import { AccountCircle } from "@material-ui/icons";
import pokeball from "../resources/PokeBall.svg";

const Navbar = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
  const isMobileScreen = useMediaQuery("(max-width: 530px)");

  const [openAuth, setOpenAuth] = useState(false);
  
  const toggleAuthModal = () => { setOpenAuth(!openAuth); };

  const auth = (
    <Authentication toggleModal={toggleAuthModal}/>
  );

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
              <NavButton text="Favorites" path="/favorites" />
              <IconButton
                onClick={toggleAuthModal}
              >
                <AccountCircle 
                  className="white" 
                  fontSize="medium"
                />
              </IconButton>
            </Grid>
          </div>
        </Toolbar>

        <Modal
          open={openAuth}
          onClose={toggleAuthModal}
        >
          <>
            {auth}
          </>
        </Modal>

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