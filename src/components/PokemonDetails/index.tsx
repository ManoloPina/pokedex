'use client';

interface Props {
  children: React.ReactNode;
}

import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const PokemonDetails: React.FC<Props> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Pokemon details</DialogTitle>
        </VisuallyHidden>
        <p>Manolito</p>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetails;
