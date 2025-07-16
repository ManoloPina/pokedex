import { PokemonService } from '@/services/pokemonService';
import { twMerge } from 'tailwind-merge';

import { IType } from '@/model/Pokemon/Types';

import ItemType from './ItemType';
import AllTypes from './AllTypes';

interface IProps {
  className?: string;
}

const filterTypes = (item: IType) =>
  item.name !== 'unknown' && item.name !== 'stellar';

export default async function Sidebar({ className = '' }: Readonly<IProps>) {
  const pokemonTypes = await PokemonService.getPokemonTypes();

  return (
    <div className={twMerge('w-[240px] relative', className)}>
      <ul className="flex flex-col gap-3">
        <AllTypes />
        {pokemonTypes?.results.filter(filterTypes).map((item) => (
          <ItemType key={item.url} name={item.name} url={item.url} />
        ))}
      </ul>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 h-5/6 border-r border-[#EFF3F6]" />
    </div>
  );
}
