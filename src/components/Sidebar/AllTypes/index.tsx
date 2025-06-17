'use client';

import Link from 'next/link';
import { PokeBall } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

export default function AllTypes() {
  const searchParams = useSearchParams();

  const selectedType = searchParams.get('type');
  const isActive = !selectedType;
  return (
    <Link
      href="/"
      className={cn(
        'font-semibold text-sm text-[#ACB9C1] hover:text-[#3E75C3] cursor-pointer flex flex-row items-center gap-6.5',
        isActive ? 'text-[#3E75C3]' : 'text-[#ACB9C1]'
      )}
    >
      <PokeBall className="size-4 align-middle text-[#3E75C3]" />
      All types
    </Link>
  );
}
