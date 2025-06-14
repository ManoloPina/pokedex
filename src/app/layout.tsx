import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Montserrat, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { TRPCProvider } from '@/trpc/client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';

export const metadata: Metadata = {
  title: 'Pokedex - Home Page',
  description: 'Generated by create next app',
};

const montserrat = Montserrat({
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCProvider>
        <body className={`antialiased`}>
          <header
            className={twMerge(
              montserrat.className,
              'w-full h-screen max-h-[600px] bg-radial from-[#AB0001] from-0% to-[#AB0001] to-100% relative'
            )}
          >
            <div className="flex flex-col h-full max-w-7xl mx-auto justify-center items-center">
              <div className="w-full pt-5">
                <Image
                  alt="Pokemon Logo"
                  src="/logo.svg"
                  width={159}
                  height={58}
                />
              </div>
              <div className="absolute bottom-1/2">
                <h2 className="text-white font-bold text-[48px] text-center md:text-[6.4rem] ">
                  Who&apos;s that Pokémon?
                </h2>
                <p className="text-base p-5 md:text-lg font-medium text-white text-center">
                  The perfect guide for those who want to hunt Pokémon around
                  the world.
                </p>
              </div>
              <Button
                variant="secondary"
                className="rounded-full text-blue-500 font-semibold text-sm hover:bg-secondary"
              >
                <div className="rounded-full bg-blue-200 p-0.5">
                  <Image
                    src="/pokedex-bag.png"
                    alt="Pokédex Bag"
                    width={16}
                    height={16}
                  />
                </div>
                Pokédex
              </Button>
              <div
                style={{ backgroundImage: "url('/red-bg-pattern.png')" }}
                className="bg-center bg-no-repeat bg-contain w-full mx-auto flex-1"
              />
              <Image
                className="absolute -bottom-4 md:-bottom-[248px]"
                src="/red-pokeball.png"
                alt="Red Pokeball"
                width={800}
                height={520}
              />
            </div>
          </header>
          <SearchBar />
          <div
            className={twMerge(
              inter.className,
              'grid grid-cols-1 md:grid-cols-[240px_2fr] max-w-7xl gap-10 mx-auto items-start justify-start pt-10 border border-red-500'
            )}
          >
            <Sidebar className="hidden md:flex" />
            <div>{children}</div>
          </div>
        </body>
      </TRPCProvider>
    </html>
  );
}
