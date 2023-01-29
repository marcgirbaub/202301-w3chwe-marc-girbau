export interface Type {
  type: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  types: Type[];
  sprites: { other: { dream_world: { front_default: string } } };
}
