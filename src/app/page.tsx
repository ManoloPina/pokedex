import { HydrateClient, trpc } from '@/trpc/server';
import PokemonList from '@/components/PokemonList';

export default async function Home() {
  await trpc.fetchPokemons.prefetchInfinite({
    limit: 9,
  });

  return (
    <HydrateClient>
      <PokemonList />
    </HydrateClient>
  );
}
