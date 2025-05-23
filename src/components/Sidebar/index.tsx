import { IType } from '@/model/Pokemon/Types';
import { PokemonService } from '@/services/pokemonService';
import { twMerge } from 'tailwind-merge';

interface IProps {
  list: IType[];
  className?: string;
}

export default async function Sidebar({
  list = [],
  className = '',
}: Readonly<IProps>) {
  const pokemonTypes = await PokemonService.getPokemonTypes();
  console.log('list:', list);
  return (
    <div className={twMerge(className)}>
      <ul className="flex flex-col gap-3">
        <li className="font-semibold text-sm text-[#ACB9C1] cursor-pointer">
          All types
        </li>
        {pokemonTypes?.results.map((item) => (
          <li key={item.url} className="cursor-pointer">
            <span className="font-semibold text-sm text-[#ACB9C1] hover:text-[#3E75C3] duration-500 capitalize">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
