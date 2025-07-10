import { baseProcedure, createTRPCRouter } from '../init';
import { PokemonService } from '@/services/pokemonService';
import http from '@/lib/http';
import { IPokemon, PokemonSummary } from '@/model/Pokemon';
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
      let pokemonList: { name: string; url: string }[] = [];
      let count = 0;

      if (type) {
        const pokemonsTypesRes = await PokemonService.getAllPokemonsByType(
          type
        );

        if (!pokemonsTypesRes) {
          return {
            pokemons: [],
            nextCursor: null,
            count: 0,
          };
        }

        count = pokemonsTypesRes.pokemon.length;

        pokemonList = pokemonsTypesRes.pokemon
          .slice(cursor, cursor + limit)
          .map((p) => ({
            name: p.pokemon.name,
            url: p.pokemon.url,
          }));
      } else if (query) {
        const pokemon = (await PokemonService.getAllPokemons(
          0,
          0,
          query
        )) as IPokemon | null;
        if (!pokemon) {
          return {
            pokemons: [],
            nextCursor: null,
            count: 0,
          };
        }
        const weaknesses = await PokemonService.getWeaknesses(pokemon.types);
        return {
          pokemons: [
            {
              id: pokemon.id,
              name: pokemon.name,
              sprites: pokemon.sprites,
              types: pokemon.types,
              abilities: pokemon.abilities,
              base_experience: pokemon.base_experience,
              height: pokemon.height,
              weight: pokemon.weight,
              weaknesses,
              stats: pokemon.stats,
            },
          ],
          nextCursor: null,
          count: 1,
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
            count: 0,
          };
        }

        count = pokemonListRes.count;

        pokemonList = pokemonListRes.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
      }

      const pokemonDetails: PokemonSummary[] = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const {
            data: {
              types,
              name,
              id,
              sprites,
              abilities,
              height,
              weight,
              base_experience,
              stats,
            },
          } = await http.get<IPokemon>(pokemon.url);

          const weaknesses = await PokemonService.getWeaknesses(types);

          return {
            id,
            name,
            sprites,
            types,
            abilities,
            height,
            weight,
            base_experience,
            weaknesses,
            stats,
          };
        })
      );

      return {
        pokemons: pokemonDetails,
        nextCursor: pokemonList.length === limit ? cursor + limit : null,
        count,
      };
    }),
});

export type AppRouter = typeof appRouter;
