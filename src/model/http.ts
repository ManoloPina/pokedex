export interface IPaginatedResult<T> {
  count: number;
  next: string;
  previous: null | string;
  results: T[];
}
