import { startApp } from "../../index.js";
import type { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";

export class DetailPageComponent extends Component {
  constructor(parentElement: Element, public pokemon: Pokemon) {
    super("div", parentElement, "card-container");
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <button class="back-button material-symbols-outlined">undo</button>
    <div class="card detail">
      <img src="${this.pokemon.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.pokemon.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${this.pokemon.id}</li>
      <li class="list-group-item">Type: ${this.pokemon.types[0].type.name}</li>
      <li class="list-group-item">Height: ${this.pokemon.height}</li>
      <li class="list-group-item">Weight: ${this.pokemon.weight}</li>
      <li class="list-group-item">Base experience: ${this.pokemon.base_experience}</li>
      <li class="list-group-item">Order: ${this.pokemon.order}</li>
    </ul>
    </div>`;
  }
}
