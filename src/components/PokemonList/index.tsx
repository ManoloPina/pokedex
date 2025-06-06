'use client';

import { trpc } from '@/trpc/client';
import PokemonCard from '../PokemonCard';

export default function PokemonList() {
  const {
    data: pokemons,
    isLoading,
    isFetching,
  } = trpc.fetchPokemons.useQuery();

  return (
    <ul className="grid grid-cols-3 gap-8">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </ul>
  );
}
