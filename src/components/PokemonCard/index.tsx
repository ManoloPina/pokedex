'use client';

import { IPokemon } from '@/model/Pokemon';
import Image from 'next/image';

type Props = IPokemon;

export default function PokemonCard(props: Readonly<Props>) {
  return (
    <li className="shadow-md rounded-lg flex flex-col justify-center w-[280px]">
      <div className="size-[200px] flex flex-row justify-center items-center self-center border border-red-500">
        <Image
          className="max-w-fit h-auto"
          width={120}
          height={20}
          alt="Pokémon image"
          src={props.sprites.other.dream_world.front_default as string}
        />
      </div>
      <p>#{props.id}</p>
      <p>{props.name}</p>
    </li>
  );
}
