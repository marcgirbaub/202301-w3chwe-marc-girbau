export interface Type {
  name: string;
}

export interface Sprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  sprites: Sprites;
}
