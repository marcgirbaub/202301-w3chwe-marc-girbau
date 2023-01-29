import type { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";
import type { CardComponentStructure } from "./types.js";

export class CardComponent extends Component implements CardComponentStructure {
  pokemon: Pokemon;

  constructor(parentElement: Element, pokemon: Pokemon) {
    super(
      "article",
      parentElement,
      `card pokemon-card ${pokemon.types[0].type.name}`
    );

    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <button class="pokemon-button">
      <div class="pokemon-card__info">
        <span class="pokemon-card__name">${this.pokemon.name}</span>
        <span class="pokemon-card__id">#${this.pokemon.id}</span>
        <span class="pokemon-card__type">${this.pokemon.types[0].type.name}</span>
      </div>
      <div class="pokemon-card__image-container">
        <img class="pokemon-card__image" src="${this.pokemon.sprites.other.dream_world.front_default}">
      </div>
    </button>
    `;
  }
}
