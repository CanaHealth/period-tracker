import * as React from 'react';

import clsxm from '@/lib/clsxm';

type Color_blockProps = {
  // color_name: string;
  code: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Color_block({ code }: Color_blockProps) {
  return <div className={clsxm('h-96 w-96', code)}>{code}</div>;
}
