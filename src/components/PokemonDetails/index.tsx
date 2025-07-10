'use client';
import React, { useMemo } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { usePokemon } from '@/hooks/usePokemon';

import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import * as Icons from '@/assets/icons';
import BadgeType from '../BadgeType';

import { PokemonSummary } from '@/model/Pokemon';
import Stats from './Stats';

interface Props {
  children: React.ReactNode;
  pokemon: PokemonSummary;
}

const PokemonDetails: React.FC<Props> = ({ children, pokemon }) => {
  const { typeColors } = usePokemon();
  const icon = useMemo(() => {
    const name = pokemon.types[0].type.name;
    const iconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Type`;
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return (
      IconComponent && (
        <IconComponent
          className="size-6 text-[#ACB9C1]"
          style={{ color: typeColors[name] }}
        />
      )
    );
  }, [pokemon.types, typeColors]);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[680px] min-w-[680px] max-h-[500px] overflow-hidden border-none">
        <div
          className="absolute top-0 left-0 bottom-0 w-full max-w-[191px] z-0 bg-cover bg-no-repeat bg-left h-full"
          style={{
            backgroundImage: `url('/dialog-details-bg/${pokemon.types[0].type.name}-bg.png')`,
          }}
        />
        <VisuallyHidden>
          <DialogTitle>{pokemon.name}</DialogTitle>
        </VisuallyHidden>
        <div className="grid grid-cols-[248px_1fr] gap-4">
          <div className="relative flex flex-col justify-evenly items-center gap-8">
            <div className="rounded-full gap-2 bg-white w-fit">{icon}</div>
            <Image
              alt={pokemon.name}
              src={
                pokemon.sprites.other.dream_world.front_default ??
                pokemon.sprites.other['official-artwork'].front_default
              }
              width={232}
              height={232}
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="capitalize font-montserrat font-bold text-2xl">
                {pokemon.name}{' '}
                <span className="font-medium text-base text-[#7A7D80]">
                  #{pokemon.id.toString().padStart(3, '0')}
                </span>
              </h2>
              <div className="flex flex-row gap-2 font-montserrat font-semibold capitalize">
                {pokemon.types.map((type) => (
                  <BadgeType key={type.type.name} {...type} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-inter font-normal text-[#7A7D80] text-sm">
                  Height
                </span>
                <span className="font-montserrat font-semibold text-sm">
                  {(pokemon.height / 10).toFixed(2)}m
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-inter font-normal text-[#7A7D80] text-sm">
                  Weight
                </span>
                <span className="font-montserrat font-semibold text-sm">
                  {pokemon.weight}kg
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-inter font-normal text-[#7A7D80]">
                  Abilities
                </span>
                <span className="font-montserrat font-semibold text-sm capitalize">
                  {pokemon.abilities[0].ability.name}
                </span>
              </div>
            </div>
            <div className=" flex flex-col gap-4 ">
              <h3 className="text font-inter font-semibold text-sm text-[#4D5053]">
                Weakness
              </h3>
              <div className="flex flex-row gap-2 flex-wrap">
                {pokemon.weaknesses.map((weaknesses, i) => (
                  <BadgeType
                    key={weaknesses}
                    slot={i}
                    type={{
                      name: weaknesses,
                      url: '',
                    }}
                  />
                ))}
              </div>
            </div>
            <Stats stats={pokemon.stats} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetails;
