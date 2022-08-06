import * as React from 'react';

import NoteFlow, {
  defaultProps,
} from '@/components/period/calendar/options/NoteFlow';

import LaunchModal from '../components/popover/LaunchModal';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

export default function HomePage() {
  return (
    <div>
      <div className=' mx-auto flex h-screen flex-col items-center justify-center bg-gray-98'>
        <LaunchModal visible={false}>
          <NoteFlow {...defaultProps} />
        </LaunchModal>
      </div>
    </div>
  );
}
