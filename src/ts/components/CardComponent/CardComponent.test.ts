/* eslint-disable @typescript-eslint/naming-convention */
import type { Pokemon } from "../../types.js";
import { CardComponent } from "./CardComponent.js";

describe("Given the CardComponent class", () => {
  describe("When it is instiantiated with the pokemon bulbasaur", () => {
    test("Then it should contain the name of 'bulbasaur'", () => {
      const bulbasaur: Pokemon = {
        id: 1,
        pokemonName: "bulbasaur",
        types: { name: "grass" },
        sprites: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          },
        },
      };
      const container = document.createElement("div");
      const expectedName = bulbasaur.pokemonName;

      const bulbasaurCard = new CardComponent(container, bulbasaur);
      bulbasaurCard.render();
      const resultedBulbasaurName = container.querySelector(
        ".pokemon-card__name"
      ).textContent;

      expect(resultedBulbasaurName).not.toBeNull();
      expect(resultedBulbasaurName).toBe(expectedName);
    });
  });
});
