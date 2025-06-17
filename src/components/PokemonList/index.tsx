'use client';

import { trpc } from '@/trpc/client';
import PokemonCard from '@/components/PokemonCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';

export default function PokemonList() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const { data, isLoading, isFetching, fetchNextPage } =
    trpc.fetchPokemons.useInfiniteQuery(
      { limit: 9, type: type ? type : undefined },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  if (isLoading)
    return (
      <div className="flex flex-col items-center w-full">
        <ul className="grid grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} className="w-[280px] h-[300px]" />
          ))}
        </ul>
      </div>
    );

  return (
    <div className=" flex flex-col items-center">
      <ul className="grid grid-cols-3 gap-8">
        {data?.pages.map((page) =>
          page?.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))
        )}
      </ul>
      <Button
        className="self-center bg-[#3F5DB3]/10 hover:bg-[#3F5DB3]/20 mt-10 text-[#3F5DB3] cursor-pointer text-sm font-semibold"
        size="lg"
        onClick={() => fetchNextPage()}
      >
        {isFetching ? 'Loading...' : 'Load more Pokémons'}
      </Button>
    </div>
  );
}
