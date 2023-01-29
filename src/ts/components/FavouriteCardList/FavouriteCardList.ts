import type { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";
import { FavouriteCardComponent } from "../FavouriteCardComponent/FavouriteCardComponent.js";

export class FavouriteCardList extends Component {
  pokemons: Pokemon[];

  constructor(
    parentElement: Element,
    pokemons: Pokemon[],
    public lastPokemon: number
  ) {
    super("ul", parentElement, "row row-cols-2 row-cols-md-4");

    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.element.innerHTML = `
      ${this.pokemons.map(() => `<li class="favourite"></li>`).join("")}`;

    this.element
      .querySelectorAll(".favourite")
      .forEach((pokemonCard, position) => {
        const pokemon = new FavouriteCardComponent(
          pokemonCard,
          this.pokemons[position]
        );

        pokemon.render();
      });
  }
}
