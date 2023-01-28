import { Component } from "../Component/Component.js";

export class PageComponent extends Component {
  constructor(public title: string) {
    super("div", document.body, "app container");

    this.title = title;
  }

  public render() {
    super.render();

    this.element.innerHTML = `
    <header class="main-header">
      <div class="main-header__title title">
        <h1 class="title__title">${this.title}</h1>
        <img class="title__image" src="../../../img/pokeball_title.png">
      </div>
      <input type="search" class="main-header__searchbar">
      <div class="main-header__links link">
        <a class="link__favourite">My Pokemons</a>
        <div class="link__buttons buttons">
          <button class="buttons__back"></button>
          <button class="buttons__forward"></button>
        </div>
      </div>
    </header>
    `;
  }
}
