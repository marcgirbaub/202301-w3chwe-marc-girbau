/* eslint-disable @typescript-eslint/naming-convention */
// /* eslint-disable @typescript-eslint/naming-convention */
import type { Pokemon } from "../../types.js";
import { CardComponent } from "./CardComponent.js";

describe("Given the CardComponent class", () => {
  describe("When it is instiantiated with the pokemon bulbasaur", () => {
    test("Then it should contain the name of 'bulbasaur'", () => {
      const bulbasaur: Pokemon = {
        id: 1,
        name: "bulbasaur",
        types: [{ type: { name: "grass" } }],
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        height: 10,
        weight: 10,
        base_experience: 10,
        order: 10,
      };
      const container = document.createElement("div");
      const expectedName = bulbasaur.name;

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
