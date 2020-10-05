import React from "react";

// Components
import {
  Typography,
  Grid,
  IconButton,
  useMediaQuery
} from "@material-ui/core";
import Typing from "./Typing";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import { MoreVert } from "@material-ui/icons";

const PokemonPreview = ({ name, image, width, types, size="medium"}) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={classes.root}>
      <Grid container justify="space-around">
        <Grid item>
          <Grid container direction="column">
            <Typography 
              className={classes.title} 
              variant={size === "medium" ? "h5" : "h6"}
            >
              {name}
            </Typography>
            <Typography variant={size === "medium" ? "body1" : "body2"}>
              #001
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton className={classes.options} size="small" edge="start">
            <MoreVert />
          </IconButton>
        </Grid>
      </Grid>
      
      <img
        src={image}
        width={width}
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
  options: {
    zIndex: 1,
    marginBottom: 8,
  }
}));

export default PokemonPreview;