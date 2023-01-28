import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import type { Pokemon } from "./types.js";
import { getPokemons } from "./utils/getPokemons/getPokemons.js";

(async () => {
  const pokemons = await getPokemons(150);

  const page = new PageComponent("Pokedex", pokemons);
  page.render();
})();
