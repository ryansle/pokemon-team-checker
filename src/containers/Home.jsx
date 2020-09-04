import React from "react";

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
            types={["grass", "ground"]}
          />
          <PokemonPreview 
            name="Psyduck"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
            types={["water"]}
          />
          <PokemonPreview 
            name="Metagross"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
            types={["steel", "psychic"]}
          />
          <PokemonPreview 
            name="Shuckle"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
            types={["bug", "rock"]}
          />
          <PokemonPreview 
            name="Gabite"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
            types={["dragon", "ground"]}
          />
          <PokemonPreview 
            name="Beartic"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
            types={["ice"]}
          />
        </Grid>

        <Divider className={classes.divider}/>

        <Toolbar>
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
        </Toolbar>
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