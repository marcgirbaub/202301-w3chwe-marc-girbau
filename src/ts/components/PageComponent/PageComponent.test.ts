/* eslint-disable @typescript-eslint/naming-convention */
import type { Pokemon } from "../../types.js";
import { PageComponent } from "./PageComponent.js";

describe("Given the PageComponent class", () => {
  describe("When it is instantiated with the title `Pokedex`", () => {
    test("Then it should have a title with the word `Pokedex`", () => {
      const title = "Pokedex";
      const pokemons: Pokemon[] = [
        {
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
        },
      ];
      const bodyElement = document.body;
      const pageElement = new PageComponent(title, pokemons);
      pageElement.render();
      const expectedTitle = "Pokedex";

      const pokedexTitleEl = bodyElement.querySelector("h1");
      const pokedexTitle = pokedexTitleEl.textContent;

      expect(pokedexTitle).not.toBeNull();
      expect(pokedexTitle).toBe(expectedTitle);
    });
  });
});
