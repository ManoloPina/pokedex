'use client';
import { QUERIES } from '@/lib/constants';
import { PokemonService } from '@/services/pokemonService';
import { useQuery } from '@tanstack/react-query';
export default function PokemonList() {
  const { data: pokemons, isLoading } = useQuery({
    queryKey: [QUERIES.POKEMON],
    queryFn: () => PokemonService.getAllPokemons(),
  });
  return (
    <ul>
      {pokemons?.results.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </ul>
  );
}
