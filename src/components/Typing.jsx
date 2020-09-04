import React from "react";

// Components
import { Grid, Paper, Typography } from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const Typing = ({ type }) => {
  const classes = useStyles();

  // This is hopefully a temporary solution
  const renderColor = (type) => {
    switch(type) {
      case "normal":
        return classes.normal;
      case "fire":
        return classes.fire;
      case "water":
        return classes.water;
      case "electric":
        return classes.electric;
      case "grass":
        return classes.grass;
      case "ice":
        return classes.ice;
      case "fighting":
        return classes.fighting;
      case "poison":
        return classes.poison;
      case "ground":
        return classes.ground;
      case "flying":
        return classes.flying;
      case "psychic":
        return classes.psychic;
      case "bug":
        return classes.bug;
      case "rock":
        return classes.rock;
      case "ghost":
        return classes.ghost;
      case "dragon":
        return classes.dragon;
      case "dark":
        return classes.dark;
      case "steel":
        return classes.steel;
      case "fairy":
        return classes.fairy;
      default: 
        return classes.unknown;
    }
  }
  
  return (
    <>
      <Paper
        className={renderColor(type)}
        variant="outlined"
        elevation={10}
        style={{ 
          textShadow: "1px 1px 3px black",
          color: "white",
          padding: 5,
          width: 55,
          height: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 3,
        }}
      >
        <p className={classes.text}>
          {type.toUpperCase()}
        </p>
      </Paper>
    </>
  )
};

const useStyles = makeStyles(() => ({
  typing: {
    padding: 5,
  },
  text: {
    fontSize: 13,
  },

  //#region Type Styles
  normal: {
    backgroundColor: "#aaaa99",
  },
  fire: {
    backgroundColor: "#fb4422",
  },
  water: {
    backgroundColor: "#3399ff"
  },
  electric: {
    backgroundColor: "#fdcc33"
  },
  grass: {
    backgroundColor: "#77cc55"
  },
  ice: {
    backgroundColor: "#66ccff"
  },
  fighting: {
    backgroundColor: "#bb5544"
  },
  poison: {
    backgroundColor: "#aa5599"
  },
  ground: {
    backgroundColor: "#ddbb55"
  },
  flying: {
    backgroundColor: "#8899ff"
  },
  psychic: {
    backgroundColor: "#fb5599"
  },
  bug: {
    backgroundColor: "#aabb21"
  },
  rock: {
    backgroundColor: "#bbaa66"
  },
  ghost: {
    backgroundColor: "#6666bb"
  },
  dragon: {
    backgroundColor: "#7766ed"
  },
  dark: {
    backgroundColor: "#775544"
  },
  steel: {
    backgroundColor: "#aaaabb"
  },
  fairy: {
    backgroundColor: "#ee99ee"
  },
  unknown: {
    backgroundColor: "#68a08f"
  },
  //#endregion
}));

export default Typing;