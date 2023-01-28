import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import type { Pokemon } from "./types.js";
import { getPokemons } from "./utils/getPokemons/getPokemons.js";

const page = new PageComponent("Pokedex");
page.render();

(async () => {
  const pokemons = await getPokemons(150);

  const pokemonbulbasaur = new CardComponent(page.element, pokemons[3]);
  pokemonbulbasaur.render();
})();
