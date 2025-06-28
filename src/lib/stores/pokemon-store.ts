import { createStore } from 'zustand/vanilla';

export type PokemonStore = {
  type: string;
  setType: (type: string) => void;
};

export type PokemonInitialState = Pick<PokemonStore, 'type'>;

export const defaultInitialState: PokemonInitialState = {
  type: '',
};

export const createPokemonStore = (
  initialState: PokemonInitialState = defaultInitialState
) => {
  return createStore<PokemonStore>()((set) => ({
    ...initialState,
    setType: (type) => set(() => ({ type })),
  }));
};
