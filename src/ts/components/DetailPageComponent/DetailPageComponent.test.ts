/* eslint-disable @typescript-eslint/naming-convention */
import type { Pokemon } from "../../types.js";
import { DetailPageComponent } from "./DetailPageComponent";

describe("Given the DetailPageComponent class", () => {
  describe("When it is instantiated with the bulbasaur pokemon", () => {
    test("Then it should have a base experience of 64", () => {
      const bulbasaur: Pokemon = {
        id: 1,
        name: "bulbasaur",
        height: 10,
        weight: 20,
        base_experience: 110,
        order: 12,
        types: [{ type: { name: "grass" } }],
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
      };
      const expectedBaseExperience = "Base Experience: 64";

      const bodyElement = document.body;
      const detailPage = new DetailPageComponent(bodyElement, bulbasaur);
      detailPage.render();

      const resultedExperienceEl = detailPage.element.querySelector(".base");
      const resultedExperience = resultedExperienceEl.textContent;

      expect(resultedExperience).not.toBeNull();
    });
  });
});
