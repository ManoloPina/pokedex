'use client';

import Link from 'next/link';
import { PokeBall } from '@/assets/icons';

export default function AllTypes() {
  return (
    <Link
      href="/"
      className="font-semibold text-sm text-[#ACB9C1] hover:text-[#3E75C3] cursor-pointer flex flex-row items-center gap-6.5"
    >
      <PokeBall className="size-4 align-middle text-[#3E75C3]" />
      All types
    </Link>
  );
}
