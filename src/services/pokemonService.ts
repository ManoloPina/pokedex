import http from '@/lib/http';
import { PokemonType } from '@/model/Pokemon/Types';

export const PokemonService = {
  async getPokemonTypes(): Promise<PokemonType | null> {
    try {
      const res = await http.get(`/type`);
      if (res.status === 200) {
        return res.data;
      }
      return null;
    } catch (err: unknown) {
      console.log(err, 'err');
      return null;
    }
  },
  async getAllPokemons(
    limit: number,
    offset: number
  ): Promise<PokemonType | null> {
    try {
      const res = await http.get(`/pokemon?limit=${limit}&offset=${offset}`);
      if (res.status === 200) {
        return res.data;
      }
      return null;
    } catch (err: unknown) {
      console.log(err, 'err');
      return null;
    }
  },
  async getAllPokemonsByType(
    type: string
  ): Promise<{ pokemon: { pokemon: { name: string; url: string } }[] } | null> {
    try {
      const res = await http.get(`type/${type}`);
      if (res.status === 200) {
        return res.data;
      }
      return null;
    } catch (err: unknown) {
      console.log(err, err);
      return null;
    }
  },
};
