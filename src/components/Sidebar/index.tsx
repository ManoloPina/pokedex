import { PokemonService } from '@/services/pokemonService';
import { twMerge } from 'tailwind-merge';
import * as Icons from '@/assets/icons';
import { IType } from '@/model/Pokemon/Types';

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
        <li className="font-semibold text-sm text-[#ACB9C1] hover:text-[#3E75C3] cursor-pointer flex flex-row items-center gap-6.5">
          <Icons.PokeBall className="size-4 align-middle text-[#3E75C3]" />
          All types
        </li>
        {pokemonTypes?.results.filter(filterTypes).map((item) => {
          const iconName = `${item.name
            .charAt(0)
            .toUpperCase()}${item.name.slice(1)}Type`;

          const IconComponent = Icons[iconName as keyof typeof Icons];

          return (
            <li
              key={item.url}
              className="cursor-pointer text-[#ACB9C1] hover:text-[#3E75C3] flex flex-row items-center gap-5"
            >
              {IconComponent && (
                <IconComponent className="size-6 group-hover:text-[#3E75C3] duration-500" />
              )}
              <span className="font-semibold text-sm duration-500 capitalize">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 h-5/6 border-r border-[#EFF3F6]" />
    </div>
  );
}
