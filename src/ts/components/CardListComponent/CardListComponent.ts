import type { Pokemon } from "../../types.js";
import { CardComponent } from "../CardComponent/CardComponent.js";
import { Component } from "../Component/Component.js";
import type { CardListComponentStructure } from "./types.js";

export class CardListComponent
  extends Component
  implements CardListComponentStructure
{
  pokemons: Pokemon[];

  constructor(parentElement: Element, pokemons: Pokemon[]) {
    super("ul", parentElement, "row row-cols-2");

    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.element.innerHTML = `
      ${this.pokemons.map(() => `<li class="col"></li>`).join("")}`;

    this.element.querySelectorAll(".col").forEach((pokemonCard, position) => {
      const pokemon = new CardComponent(pokemonCard, this.pokemons[position]);

      pokemon.render();
    });
  }
}
