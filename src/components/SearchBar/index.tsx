'use client';

import { twMerge } from 'tailwind-merge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
  className?: string;
}

export default function SearchBar({ className = '' }: Readonly<IProps>) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setSearchText(search ?? '');
  }, [search]);

  const handleSearchClick = () => {
    if (searchText.trim()) {
      console.log(encodeURIComponent(searchText.trim()));
      router.replace(`/?search=${encodeURIComponent(searchText.trim())}`);
    }
  };

  return (
    <div
      className={twMerge(
        'h-[300px] bg-gradient-to-tr from-[#eff3f6]/100 to-[#eff3f6]/10 flex flex-col md:flex-row items-center',
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        <p className="font-bold text-primary text-3xl max-w-[260px]">
          Selecione o seu Pokémon
        </p>
        <div className="w-1/3">
          <Input
            value={searchText}
            placeholder="Pesquise pelo nome ou código"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchClick();
            }}
            className="z-10 rounded-full text-sm placeholder:text-[#A0AFBA]  shadow-none bg-white w-full !px-6 !py-4 h-[56px]"
            endAdornment={
              <Button
                className="rounded-full bg-[#9EB9E1] hover:bg-[#9EB9E1]/90 size-[42px] cursor-pointer"
                onClick={handleSearchClick}
              >
                <Search className="text-[#3E75C3] font-bold" size={16} />
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}
