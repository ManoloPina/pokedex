'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { usePokemonStore } from '@/providers/pokemon-store-provider';

import { PokeBall } from '@/assets/icons';

export default function AllTypes() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setType } = usePokemonStore((state) => state);

  const selectedType = searchParams.get('type');
  const isActive = !selectedType;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setType('');
        router.replace('/');
      }}
      className={cn(
        'font-semibold text-sm text-[#ACB9C1] hover:text-[#3E75C3] cursor-pointer flex flex-row items-center gap-6.5',
        isActive ? 'text-[#3E75C3]' : 'text-[#ACB9C1]'
      )}
    >
      <PokeBall className="size-4 align-middle text-[#3E75C3]" />
      All types
    </button>
  );
}
