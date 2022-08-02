import * as React from 'react';

import ColorPalette from '@/components/ColorPalette';
import Layout from '@/components/layout/Layout';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

const colors = {
  blue: { 63: '#5f62e4', 81: '#afbef1', 87: '#dcd9e3', 93: '#e7edf8' },
  electric_cyan: { 81: '#b8dee9', 91: '#d8fcfc', 95: '#eff4f9' },
  gray: {
    59: '#949799',
    72: '#b7bcba',
    98: '#f8fafc',
    99: '#fcfcfd',
    '99_': '#feffff',
  },
  magenta: { 94: '#fce5e8' },
};

export default function HomePage() {
  return (
    <Layout>
      <div className='mx-auto flex h-full flex-col items-center justify-center space-y-4 py-44'>
        <ColorPalette colors={colors} />
      </div>
    </Layout>
  );
}
