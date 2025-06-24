'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { usePokemonStore } from '@/providers/pokemon-store-provider';

import * as Icons from '@/assets/icons';

import { IType } from '@/model/Pokemon/Types';

type Props = IType;

export default function ItemType({ name, url }: Readonly<Props>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setType } = usePokemonStore((state) => state);

  const selectedType = searchParams.get('type');
  const isActive = selectedType === name;

  const iconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Type`;
  const IconComponent = Icons[iconName as keyof typeof Icons];

  return (
    <button
      key={url}
      onClick={(e) => {
        e.preventDefault();
        console.log({ name });
        router.replace(`?type=${name}`);
        setType(name);
      }}
      className={cn(
        'cursor-pointer text-[#ACB9C1] hover:text-[#3E75C3] flex flex-row items-center gap-5',
        isActive ? 'text-[#3E75C3]' : 'text-[#ACB9C1]'
      )}
    >
      {IconComponent && (
        <IconComponent className="size-6 group-hover:text-[#3E75C3] duration-500" />
      )}
      <span className="font-semibold text-sm duration-500 capitalize">
        {name}
      </span>
    </button>
  );
}
