import { startApp } from "../../index.js";
import type { Pokemon } from "../../types.js";
import { CardListComponent } from "../CardListComponent/CardListComponent.js";
import { Component } from "../Component/Component.js";

export class PageComponent extends Component {
  constructor(
    public title: string,
    public pokemons: Pokemon[],
    private firstPositon = 0,
    private lastPosition = 10
  ) {
    super("div", document.body, "app");

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
      <input type="search" placeholder="🔍  What Pokemon are you looking for?" class="main-header__searchbar">
      <div class="main-header__links link">
        <a class="link__favourite">My Pokemons</a>
        <div class="link__buttons buttons">
          <button class="buttons__back"></button>
          <button class="buttons__forward"></button>
        </div>
      </div>
    </header>
    <main class="container"></main>
    `;

    const listContainer = this.element.querySelector(".container");
    const listOfPokemons = new CardListComponent(
      listContainer,
      this.pokemons.slice(this.firstPositon, this.lastPosition)
    );
    listOfPokemons.render();

    const forwardButton = this.element.querySelector(".buttons__forward");
    forwardButton.addEventListener("click", () => {
      this.firstPositon += 10;
      this.lastPosition += 10;
      listContainer.innerHTML = "";

      const listOfPokemons = new CardListComponent(
        listContainer,
        this.pokemons.slice(this.firstPositon, this.lastPosition)
      );
      listOfPokemons.render();
    });

    const backButton = this.element.querySelector(".buttons__back");
    backButton.addEventListener("click", () => {
      if (this.firstPositon !== 0) {
        this.firstPositon -= 10;
        this.lastPosition -= 10;
        listContainer.innerHTML = "";

        const listOfPokemons = new CardListComponent(
          listContainer,
          this.pokemons.slice(this.firstPositon, this.lastPosition)
        );
        listOfPokemons.render();
      }
    });
  }
}
