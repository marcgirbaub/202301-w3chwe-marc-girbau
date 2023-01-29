/* eslint-disable @typescript-eslint/naming-convention */
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
    <button class="fav-button">Add favourites</button>
    <button class="back-button material-symbols-outlined">undo</button>
    <div class="card detail">
      <img src="${this.pokemon.sprites.other.dream_world.front_default}" class="card-image" alt="${this.pokemon.name}">
      <div class="card-body">
        <h5 class="card-title">${this.pokemon.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${this.pokemon.id}</li>
      <li class="list-group-item">Type: ${this.pokemon.types[0].type.name}</li>
      <li class="list-group-item">Height: ${this.pokemon.height}</li>
      <li class="list-group-item">Weight: ${this.pokemon.weight}</li>
      <li class="list-group-item base">Base experience: ${this.pokemon.base_experience}</li>
      <li class="list-group-item">Order: ${this.pokemon.order}</li>
    </ul>
    </div>`;

    const addFavouriteButton = this.element.querySelector(".fav-button");
    addFavouriteButton.addEventListener("click", async () => {
      await fetch(
        "https://two02301-w3chwe-pokeapi-marc-girbau.onrender.com/pokemon/",
        {
          method: "POST",
          body: JSON.stringify({
            id: this.pokemon.id,
            name: this.pokemon.name,
            height: this.pokemon.height,
            weight: this.pokemon.weight,
            base_experience: this.pokemon.base_experience,
            order: this.pokemon.order,
            types: [{ type: { name: this.pokemon.types[0].type } }],
            sprites: {
              other: {
                dream_world: {
                  front_default:
                    this.pokemon.sprites.other.dream_world.front_default,
                },
              },
            },
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then(async (response) => response.json());
    });
  }
}
