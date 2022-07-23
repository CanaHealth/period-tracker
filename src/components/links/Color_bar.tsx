import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Color_block from '../Color_block';

const color_string = (color_name: string, code: string) => {
  return `border-${color_name}-${code}`;
};

type Color_barProps = {
  color_name: string;
  code: string[];
} & React.ComponentPropsWithoutRef<'div'>;

export default function Color_bar({
  className,
  color_name,
  code,
  ...rest
}: Color_barProps) {
  return (
    <div
      className={clsxm(
        'mx-auto flex h-full w-96 flex-col items-center justify-center space-y-4 py-44',
        className
      )}
      {...rest}
    >
      <strong>{color_name}</strong>
      <div className='mx-auto flex w-96 items-center justify-center'>
        {code.map((c, i) => (
          <Color_block key={i} code={color_string(color_name, c)} />
        ))}
      </div>
    </div>
  );
}
