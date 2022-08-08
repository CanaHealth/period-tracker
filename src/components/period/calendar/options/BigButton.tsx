import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type BigButtonProps = {
  icon?: React.ReactNode;
  iconLocation?: 't' | 'b' | 'l' | 'r';
  height?: '10' | '20' | '24' | '32';
  text?: string;
  className?: string;
  forwardOnClick?: () => void;
};

const BigButton: React.FC<BigButtonProps> = ({
  icon,
  text,
  height = 10,
  iconLocation = 'r',
  forwardOnClick,
  className,
}) => {
  return (
    <button
      aria-label={text}
      type='button'
      className={clsxm(
        'flex w-44',
        'flex-col items-center justify-center rounded shadow-sm hover:shadow-md',
        'border border-blue-93 bg-white  text-indigo-800',
        'transition-all ease-out active:bg-gray-800 active:text-white',
        'hover:bg-gray-600 hover:text-white ',
        [
          height === '10' && !text && ['h-10'],
          height === '20' && ['h-20'],
          height === '24' && ['h-24'],
          height === '32' && ['h-32'],
          !text && ['text-lg'],
          !icon && ['text-lg'],
        ],
        className
      )}
      onClick={forwardOnClick}
    >
      <div
        className={clsxm('flex items-center justify-center text-inherit', [
          iconLocation === 't' && ['flex-col'],
          iconLocation === 'b' && ['flex-col-reverse'],
          iconLocation === 'l' && ['flex-row'],
          iconLocation === 'r' && ['flex-row-reverse'],
        ])}
      >
        {icon && <span className='m-1'>{icon}</span>}
        {text && <span className='m-1 w-max'>{text}</span>}
      </div>
    </button>
  );
};

export default BigButton;
