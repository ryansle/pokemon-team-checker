import React, { useState, useEffect } from "react";

// Components
import { 
  Paper,
  Toolbar,
  TextField,
  Button,
  Grid,
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery
} from "@material-ui/core";
import PokemonPreview from "../components/PokemonPreview";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
  
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    for (let id = 1; id <= 2; id += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
          const current = {
            id: data.id,
            name: data.name,
            types: data.types,
            sprites: data.sprites.other,
          }
          setPokemon(pokemon => [...pokemon, current]);
        });
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <>
      <Paper
        className={isSmallScreen ? "responsive-paper" : "paper"}
        elevation={24}
      >
        <Toolbar>
          <div>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.teamName}
                label="My Pokémon Team"
                type="text"
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  },
                }}
              />
            </form>
          </div>
          <div className="grow"/>
          <div>
            <Button>Save</Button>
          </div>
        </Toolbar>

        <br/>

        <Grid container justify="space-evenly">
          <PokemonPreview 
            name="Torterra"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
            width="150vw"
            types={["grass", "ground"]}
          />
          <PokemonPreview 
            name="Psyduck"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
            width="150vw"
            types={["water"]}
          />
          <PokemonPreview 
            name="Metagross"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
            width="150vw"
            types={["steel", "psychic"]}
          />
          <PokemonPreview 
            name="Shuckle"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
            width="150vw"
            types={["bug", "rock"]}
          />
          <PokemonPreview 
            name="Gabite"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
            width="150vw"
            types={["dragon", "ground"]}
          />
          <PokemonPreview 
            name="Beartic"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
            width="150vw"
            types={["ice"]}
          />
        </Grid>

        <Divider className={classes.divider}/>

        {/* <Toolbar>
          <Typography variant="h6">Filter By...</Typography>
          <div className="grow"/>
          <FormControl className={classes.formControl}>
            <InputLabel id="pokedex">Pokédex</InputLabel>
            <Select
              labelId="pokedex"
            >
              <MenuItem value="Sword &amp; Shield">Sword &amp; Shield</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="typing">Type</InputLabel>
            <Select
              labelId="typing"
            >
              <MenuItem value="Normal">Normal</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="evolution">Evolution</InputLabel>
            <Select 
              labelId="evolution"
            >
              <MenuItem value="full">Fully Evolved</MenuItem>
            </Select>
          </FormControl>
        </Toolbar> */}

        <Grid container justify="flex-start">
          {/* Fits 7 perfectly on a full-width monitor */}
          <PokemonPreview 
            name="Torterra"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
            width="120vw"
            types={["grass", "ground"]}
            size="small"
          />
        </Grid>

      </Paper>
    </>
  )
};

const useStyles = makeStyles(() => ({
  resize: {
    fontSize: 30,
    fontWeight: "bold",
  },
  labelRoot: {
    fontSize: 30,
    "&$labelFocused": {
      fontSize: 5,
    }
  },
  divider: {
    margin: "25px 0px 25px 0px",
  },
  formControl: {
    minWidth: 120,
    margin: "0px 25px 0px 25px",
  }
}));

export default Home;