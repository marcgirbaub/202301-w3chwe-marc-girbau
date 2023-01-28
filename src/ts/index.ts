/* eslint-disable @typescript-eslint/naming-convention */
import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import type { Pokemon } from "./types.js";
import { getPokemons } from "./utils/getPokemons/getPokemons.js";

const page = new PageComponent("Pokedex");
page.render();

const bulbasaur: Pokemon = {
  id: 1,
  pokemonName: "bulbasaur",
  types: { name: "grass" },
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};

const pokemonbulbasaur = new CardComponent(page.element, bulbasaur);
pokemonbulbasaur.render();
