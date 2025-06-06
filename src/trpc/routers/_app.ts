import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { PokemonService } from '@/services/pokemonService';
import http from '@/lib/http';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  fetchPokemons: baseProcedure.query(async () => {
    const pokemonListRes = await PokemonService.getAllPokemons();
    if (pokemonListRes) {
      const pokemonDetails = await Promise.all(
        pokemonListRes.results.map(async (pokemon) => {
          const detailRes = await http.get(pokemon.url);
          return {
            ...detailRes.data,
          };
        })
      );
      return pokemonDetails;
    }
    return [];
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
