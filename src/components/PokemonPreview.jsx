import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery
} from "@material-ui/core";
import Typing from "./Typing";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const PokemonPreview = ({ name, image, types}) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={classes.root}>
      <Typography variant="h5">
        {name}
      </Typography>
      <img
        src={image}
        width="150vw"
        height="auto"
        alt={name}
      />
      <Grid container justify="space-evenly">
        {
          types.map((pokemonType, index) => 
            <Typing key={index} type={pokemonType} />
          )
        }
      </Grid>
    </div>
  )
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
}));

export default PokemonPreview;