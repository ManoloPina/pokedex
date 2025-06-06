export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  cries: ICries;
  forms: IForm[];
  game_indices: IGameIndex[];
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_abilities: IAbility[];
  past_types: IType[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: ITypeSlot[];
  weight: number;
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface ICries {
  latest: string;
  legacy: string;
}

export interface IForm {
  name: string;
  url: string;
}

export interface IGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export type IHeldItem = object;

export interface IMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: IVersionGroupDetail[];
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface ISpecies {
  url: string;
}

export interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_female: string | null;
      front_default: string | null;
    };
    home: {
      front_shiny_female: string | null;
    };
  };
  versions: Record<string, unknown>; // Defina conforme necessário
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ITypeSlot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// Adicione a interface IType se necessário, pois estava referenciada mas não definida
export type IType = object;
