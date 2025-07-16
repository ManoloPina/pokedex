'use client';
import { usePokemon } from '@/hooks/usePokemon';

import { Badge } from '@/components/ui/badge';

import { ITypeSlot } from '@/model/Pokemon';

type Props = ITypeSlot;

export default function BadgeType(props: Readonly<Props>) {
  const { typeColors } = usePokemon();
  return (
    <Badge
      className="rounded-sm text-sm font-montserrat capitalize font-semibold px-4"
      variant="default"
      style={{ backgroundColor: typeColors[props.type.name] }}
    >
      <span className="text-sm text-current">{props.type.name}</span>
    </Badge>
  );
}
