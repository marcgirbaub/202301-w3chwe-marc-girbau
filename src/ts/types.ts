export interface Type {
  name: string;
}

export interface DreamWorld {
  front_default: string;
}
export interface Other {
  dream_world: DreamWorld;
}

export interface Pokemon {
  id: number;
  pokemonName: string;
  types: Type;
  sprites: Other;
}
