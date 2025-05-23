import http from '@/lib/http';
import { IPokemonType } from '@/model/Pokemon/Types';

export const PokemonService = {
  async getPokemonTypes(): Promise<IPokemonType | null> {
    try {
      const res = await http.get('/type');
      if (res.status === 200) {
        return res.data;
      }
      return null;
    } catch (err: unknown) {
      console.log(err, 'err');
      return null;
    }
  },
  async getAllPokemons(): Promise<object | null> {
    try {
      const res = await http.get('/pokemon');
      if (res.status === 200) {
        return res.data;
      }
      return null;
    } catch (err: unknown) {
      console.log(err, 'err');
      return null;
    }
  },
};
