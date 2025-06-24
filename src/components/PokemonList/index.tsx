'use client';
import { useEffect, useMemo } from 'react';
import { trpc } from '@/trpc/client';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { usePokemonStore } from '@/providers/pokemon-store-provider';

import PokemonCard from '@/components/PokemonCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function PokemonList() {
  const { type } = usePokemonStore((state) => state);
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const search = searchParams.get('search');

  const _type = useMemo(() => {
    if (typeParam) return typeParam;
    if (!typeParam) return type;
  }, [typeParam, type]);

  const { data, isLoading, isFetching, fetchNextPage } =
    trpc.fetchPokemons.useInfiniteQuery(
      {
        limit: 9,
        type: _type && !search ? _type : undefined,
        query: search ?? undefined,
      },
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
      <ul
        className={cn(
          'grid grid-cols-1 md:grid-cols-3 gap-8',
          data?.pages.flatMap((pokemon) => pokemon.pokemons).length === 0 &&
            '!grid-cols-1'
        )}
      >
        {data?.pages.map((page, pageIndex) =>
          page?.pokemons.length > 0 ? (
            page?.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))
          ) : (
            <div
              key={pageIndex}
              className="w-full flex justify-center items-center h-[120px] "
            >
              <p className="text-2xl font-bold text-muted-foreground/50 text-center">
                No Pokémon found
              </p>
            </div>
          )
        )}
      </ul>
      <Button
        className="self-center bg-[#3F5DB3]/10 hover:bg-[#3F5DB3]/20 mt-10 text-[#3F5DB3] cursor-pointer text-sm font-semibold"
        disabled={!!search}
        size="lg"
        onClick={() => fetchNextPage()}
      >
        {isFetching ? 'Loading...' : 'Load more Pokémons'}
      </Button>
    </div>
  );
}
