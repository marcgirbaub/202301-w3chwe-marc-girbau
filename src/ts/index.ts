import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import type { Pokemon } from "./types.js";
import { getPokemons } from "./utils/getPokemons/getPokemons.js";

(async () => {})();

let pokemons = [];

const startApp = async () => {
  const pokemonsFromApi = await getPokemons(150);

  pokemons = pokemonsFromApi;

  const page = new PageComponent("Pokedex", pokemonsFromApi);
  page.render();
};

(async () => startApp())();
