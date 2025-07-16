import { HydrateClient, trpc } from '@/trpc/server';
import PokemonList from '@/components/PokemonList';
import { Suspense } from 'react';

export default async function Home() {
  await trpc.fetchPokemons.prefetchInfinite({
    limit: 9,
  });

  return (
    <HydrateClient>
      <Suspense>
        <PokemonList />
      </Suspense>
    </HydrateClient>
  );
}
