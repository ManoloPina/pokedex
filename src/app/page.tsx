import { HydrateClient, trpc } from '@/trpc/server';
import PokemonList from '@/components/PokemonList';

export default async function Home() {
  const { greeting } = await trpc.hello({ text: 'fellow kids' });

  await trpc.fetchPokemons.prefetch();

  return (
    <HydrateClient>
      <h2>{greeting}</h2>
      <PokemonList />
    </HydrateClient>
  );
}
