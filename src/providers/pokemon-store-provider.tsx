'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  type PokemonStore,
  createPokemonStore,
} from '@/lib/stores/pokemon-store';

export type PokemonStoreApi = ReturnType<typeof createPokemonStore>;

export const PokemonStoreContext = createContext<PokemonStoreApi | undefined>(
  undefined
);

export interface PokemonStoreProviderProps {
  children: ReactNode;
}

export const PokemonStoreProvider = ({
  children,
}: PokemonStoreProviderProps) => {
  const storeRef = useRef<PokemonStoreApi | null>(null);
  storeRef.current ??= createPokemonStore();
  return (
    <PokemonStoreContext.Provider value={storeRef.current}>
      {children}
    </PokemonStoreContext.Provider>
  );
};

export const usePokemonStore = <T,>(
  selector: (store: PokemonStore) => T
): T => {
  const pokemonStoreContext = useContext(PokemonStoreContext);

  if (!pokemonStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(pokemonStoreContext, selector);
};
