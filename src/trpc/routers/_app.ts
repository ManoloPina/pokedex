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
        query: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, type, query } = input;
      console.log('trpc query:', query);
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
      } else if (query) {
        console.log('passou aqui na query:');
        const pokemon = (await PokemonService.getAllPokemons(
          0,
          0,
          query
        )) as IPokemon | null;
        if (!pokemon) {
          return {
            pokemons: [],
            nextCursor: null,
          };
        }

        // Adiciona o Pokémon retornado à lista
        return {
          pokemons: [
            {
              id: pokemon.id,
              name: pokemon.name,
              sprites: pokemon.sprites,
              types: pokemon.types,
            },
          ],
          nextCursor: null,
        };
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
