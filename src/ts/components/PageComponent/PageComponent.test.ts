import { PageComponent } from "./PageComponent.js";

describe("Given the PageComponent class", () => {
  describe("When it is instantiated with the title `Pokedex`", () => {
    test("Then it should have a title with the word `Pokedex`", () => {
      const title = "Pokedex";
      const bodyElement = document.body;
      const pageElement = new PageComponent(title);
      pageElement.render();
      const expectedTitle = "Pokedex";

      const pokedexTitleEl = bodyElement.querySelector("h1");
      const pokedexTitle = pokedexTitleEl.textContent;

      expect(pokedexTitle).not.toBeNull();
      expect(pokedexTitle).toBe(expectedTitle);
    });
  });
});
