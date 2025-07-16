'use client';

import { useMemo } from 'react';
import { IPokemon } from '@/model/Pokemon';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePokemon } from '@/hooks/usePokemon';
import * as Icons from '@/assets/icons';

type Props = Pick<IPokemon, 'id' | 'types' | 'sprites' | 'name'>;

export default function PokemonCard(props: Readonly<Props>) {
  const { typeColors } = usePokemon();

  const icon = useMemo(() => {
    const name = props.types[0].type.name;
    const iconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Type`; // Nome do ícone baseado no tipo
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return (
      IconComponent && (
        <IconComponent
          className="size-6 text-[#ACB9C1]"
          style={{ color: typeColors[name] }}
        />
      )
    );
  }, [props.types, typeColors]);

  return (
    <li className="shadow-[0_4px_6px_rgba(183,189,193,0.30)] border-input border hover:shadow-[0_10px_38px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center w-[280px] p-5 gap-3 cursor-pointer duration-500 ease-in-out">
      <div className="size-[200px] flex flex-row justify-center items-center self-center">
        <Image
          className="h-auto max-w-fit z-10"
          width={140}
          height={20}
          alt="Pokémon image"
          src={
            props.sprites.other.dream_world.front_default ??
            props.sprites.other['official-artwork'].front_default
          }
        />
        <div
          className={cn('size-[160px] absolute z-1 rounded-full opacity-40')}
          style={{ backgroundColor: typeColors[props.types[0].type.name] }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm text-[#7A7D80]">#{props.id}</p>
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-[#2F3133] text-lg capitalize">
            {props.name}
          </p>
          {icon}
        </div>
      </div>
    </li>
  );
}
