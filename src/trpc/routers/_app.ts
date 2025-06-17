import { baseProcedure, createTRPCRouter } from '../init';
import { PokemonService } from '@/services/pokemonService';
import http from '@/lib/http';
import { IPokemon } from '@/model/Pokemon';
import { z } from 'zod';
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
  fetchPokemons: baseProcedure
    .input(
      z.object({
        limit: z.number().default(20),
        cursor: z.number().default(0),
        type: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, type } = input;
      let pokemonList: { name: string; url: string }[] = [];

      if (type) {
        const pokemonsTypesRes = await PokemonService.getAllPokemonsByType(
          type
        );

        if (!pokemonsTypesRes) {
          return {
            pokemons: [],
            nextCursor: null,
          };
        }

        pokemonList = pokemonsTypesRes.pokemon
          .slice(cursor, cursor + limit)
          .map((p) => ({
            name: p.pokemon.name,
            url: p.pokemon.url,
          }));
      } else {
        const pokemonListRes = await PokemonService.getAllPokemons(
          limit,
          cursor
        );
        if (!pokemonListRes) {
          return {
            pokemons: [],
            nextCursor: null,
          };
        }

        pokemonList = pokemonListRes.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
      }

      const pokemonDetails: Pick<
        IPokemon,
        'types' | 'name' | 'id' | 'sprites'
      >[] = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const {
            data: { types, name, id, sprites },
          } = await http.get<IPokemon>(pokemon.url);
          return {
            id,
            name,
            sprites,
            types,
          };
        })
      );

      return {
        pokemons: pokemonDetails,
        nextCursor: pokemonList.length === limit ? cursor + limit : null,
      };
    }),
});

export type AppRouter = typeof appRouter;
