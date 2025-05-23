import { QUERIES } from '@/lib/constants';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { PokemonService } from '@/services/pokemonService';
import PokemonList from '@/components/PokemonList';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QUERIES.POKEMON],
    queryFn: () => PokemonService.getAllPokemons(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList />
    </HydrationBoundary>
  );
}
