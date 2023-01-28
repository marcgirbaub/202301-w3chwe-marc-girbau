import { Component } from "./Component.js";

describe("Given the Component class", () => {
  describe("When it is instantiated with the class `container`", () => {
    test("Then it should be appended under its parent element", () => {
      const parentElement = document.createElement("div");
      const element = new Component("div", parentElement, "container");
      element.render();

      const resultedElement = parentElement.querySelector(".container");

      expect(resultedElement).not.toBeNull();
    });
  });
});
