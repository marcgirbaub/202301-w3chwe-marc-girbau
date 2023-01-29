import type { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";

export class FavouriteCardComponent extends Component {
  pokemon: Pokemon;

  constructor(parentElement: Element, pokemon: Pokemon) {
    super("article", parentElement, `favourite-pokemon`);

    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.element.innerHTML = `
      <div class="favourite-pokemon__container">
        <img class="favourite-pokemon__image" src="${this.pokemon.sprites.other.dream_world.front_default}">
      </div>
    `;
  }
}
