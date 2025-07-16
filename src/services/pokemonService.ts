import http from '@/lib/http';
import { ITypeSlot } from '@/model/Pokemon';
import { PokemonType } from '@/model/Pokemon/Types';

export const PokemonService = {
  async getPokemonTypes(): Promise<PokemonType | null> {
    try {
      const res = await http.get(`type`);
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
    offset: number,
    query?: string
  ): Promise<PokemonType | null> {
    try {
      if (query) {
        const res = await http.get(`pokemon/${query}`);
        if (res.status === 200) {
          return res.data;
        }
        return null;
      } else {
        const res = await http.get(`pokemon?limit=${limit}&offset=${offset}`);
        if (res.status === 200) {
          return res.data;
        }
        return null;
      }
    } catch (err: unknown) {
      console.error(err);
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
  async getWeaknesses(types: ITypeSlot[]): Promise<string[]> {
    const weaknessesSet = new Set<string>();
    await Promise.all(
      types.map(async (t) => {
        const res = await http.get(`type/${t.type.name}`);
        if (res.status === 200) {
          res.data.damage_relations.double_damage_from.forEach(
            (weak: { name: string }) => {
              weaknessesSet.add(weak.name);
            }
          );
        }
      })
    );
    return Array.from(weaknessesSet);
  },
};
