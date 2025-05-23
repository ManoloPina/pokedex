export interface IType {
  name: string;
  url: string;
}

export interface IPokemonType {
  count: number;
  next: string;
  previous: null | string;
  results: IType[];
}
