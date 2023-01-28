import type { Pokemon } from "../../types.js";

export const getPokemons = async (numberOfPokemons: number) => {
  try {
    const pokemons = [];

    for (let position = 0; position <= numberOfPokemons; position++) {
      const unresolvedPokemon = fetch(
        `https://pokeapi.co/api/v2/pokemon/${position + 1}/`
      );

      pokemons.push(unresolvedPokemon);
    }

    const unresolvedPokemons = await Promise.all(pokemons);
    const pokemonsToJson = unresolvedPokemons.map(async (pokemon) =>
      pokemon.json()
    );

    const resolvedPokemons = (await Promise.all(pokemonsToJson)) as Pokemon[];

    return resolvedPokemons;
  } catch (error: unknown) {}
};
