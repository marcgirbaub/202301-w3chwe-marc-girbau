import type { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";
import type { CardComponentStructure } from "./types.js";

export class CardComponent extends Component implements CardComponentStructure {
  pokemon: Pokemon;

  constructor(parentElement: Element, pokemon: Pokemon) {
    super("li", parentElement, `pokemon-card ${pokemon.types.name}`);

    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <a>
     <div>
       <span class="pokemon-card__name">${this.pokemon.pokemonName}</span>
       <span class="pokemon-card__id">${this.pokemon.id}</span>
       <span class="pokemon-card__type">${this.pokemon.types.name}</span>
     </div>
     <img class="pokemon-card__image" src="${this.pokemon.sprites.front_default}">

  </a>
    `;
  }
}
