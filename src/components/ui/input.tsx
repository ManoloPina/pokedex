import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

function Input({
  className,
  type,
  startAdornment,
  endAdornment,
  ...props
}: Readonly<InputProps>) {
  return (
    <div className="flex relative w-full">
      {!!startAdornment && (
        <div className="absolute top-1/2 -translate-y-1/2 left-6">
          {startAdornment}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
      {!!endAdornment && (
        <div className="absolute top-1/2 -translate-y-1/2 right-1.5 z-10">
          {endAdornment}
        </div>
      )}
    </div>
  );
}

export { Input };
