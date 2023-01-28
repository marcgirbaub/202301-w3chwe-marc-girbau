import type { ComponentStructure } from "./types.js";

export class Component implements ComponentStructure {
  element: Element;
  private readonly parentElement: Element;

  constructor(tagName: string, parentElement: Element, className = "") {
    this.element = document.createElement(tagName);
    this.element.className = className;

    this.parentElement = parentElement;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}
