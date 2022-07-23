import * as React from 'react';

type MenuButtonsProps = {
  size?: 'sm' | 'lg';
} & React.ComponentPropsWithoutRef<'div'>;

export default function MenuButtons({ size, ...rest }: MenuButtonsProps) {
  return (
    <div
      className={
        (size == 'sm' ? 'h-10 w-10 text-lg' : 'h-16 w-16 text-2xl') +
        ' flex cursor-pointer items-center justify-center rounded-full border-4 border-gray-300'
      }
    >
      {rest.children}
    </div>
  );
}
