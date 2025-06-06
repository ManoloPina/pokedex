import { IPaginatedResult } from '@/model/http';

export interface IType {
  name: string;
  url: string;
}

export type PokemonType = IPaginatedResult<IType>;
