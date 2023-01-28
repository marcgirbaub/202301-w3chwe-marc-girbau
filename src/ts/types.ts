export interface Type {
  type: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  sprites: { other: { dream_world: { front_default: string } } };
}
