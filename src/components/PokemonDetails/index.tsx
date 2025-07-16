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
  DialogClose,
} from '@/components/ui/dialog';
import * as Icons from '@/assets/icons';
import BadgeType from '../BadgeType';

import { PokemonSummary } from '@/model/Pokemon';
import Stats from './Stats';
import { X } from 'lucide-react';

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
          style={{
            color: typeColors[name],
          }}
        />
      )
    );
  }, [pokemon.types, typeColors]);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent
        className="h-screen max-h-[85vh] w-full max-w-xs rounded-2xl border-none
          bg-transparent p-0 outline-none md:max-h-[552px] md:max-w-[680px]"
        showCloseButton={false}
      >
        <DialogClose
          className="absolute -top-11 right-0 z-50 flex h-9 w-9 cursor-pointer
            items-center justify-center rounded-md bg-white transition
            hover:bg-gray-100"
          aria-label="Fechar"
        >
          <X size={18} className="text-[#4D5053]" />
        </DialogClose>
        <div
          className="relative max-h-full overflow-hidden rounded-2xl bg-white
            p-4"
        >
          <div
            className="] absolute top-0 left-0 z-0 h-[125px] w-full border-none
              bg-size-[100%_auto] bg-center bg-no-repeat md:bottom-0 md:h-full
              md:max-w-[191px] md:bg-cover md:bg-left"
            style={{
              backgroundImage: `url('/dialog-details-bg/${pokemon.types[0].type.name}-bg.png')`,
            }}
          />
          <VisuallyHidden>
            <DialogTitle>{pokemon.name}</DialogTitle>
          </VisuallyHidden>
          <div
            className="grid h-full grid-cols-1 gap-4 md:grid-cols-[248px_1fr]"
          >
            <div
              className="relative flex flex-col items-center justify-evenly
                gap-8"
            >
              <div className="w-fit gap-2 rounded-full bg-white">{icon}</div>
              <Image
                className="h-auto max-w-[148px] md:max-w-[232px]"
                alt={pokemon.name}
                src={
                  pokemon.sprites.other.dream_world.front_default ??
                  pokemon.sprites.other['official-artwork'].front_default
                }
                width={232}
                height={232}
              />
            </div>
            <div
              className="flex flex-col gap-8 overflow-y-scroll md:overflow-clip"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-montserrat text-2xl font-bold capitalize">
                  {pokemon.name}{' '}
                  <span className="text-base font-medium text-[#7A7D80]">
                    #{pokemon.id.toString().padStart(3, '0')}
                  </span>
                </h2>
                <div
                  className="font-montserrat flex flex-row gap-2 font-semibold
                    capitalize"
                >
                  {pokemon.types.map((type) => (
                    <BadgeType key={type.type.name} {...type} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <span
                    className="font-inter text-sm font-normal text-[#7A7D80]"
                  >
                    Height
                  </span>
                  <span className="font-montserrat text-sm font-semibold">
                    {(pokemon.height / 10).toFixed(2)}m
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="font-inter text-sm font-normal text-[#7A7D80]"
                  >
                    Weight
                  </span>
                  <span className="font-montserrat text-sm font-semibold">
                    {pokemon.weight}
                    kg
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-inter font-normal text-[#7A7D80]">
                    Abilities
                  </span>
                  <span
                    className="font-montserrat text-sm font-semibold capitalize"
                  >
                    {pokemon.abilities[0].ability.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className="text font-inter text-sm font-semibold
                    text-[#4D5053]"
                >
                  Weakness
                </h3>
                <div className="flex flex-row flex-wrap gap-2">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetails;
