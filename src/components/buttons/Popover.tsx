import { Popover } from '@headlessui/react'
import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  useState,
} from 'react'
import { CgCalendarToday } from 'react-icons/cg'
import { usePopper } from 'react-popper'

import BigButton from '@/components/buttons/BigButton'

type PopoverProps = {
  handleClick?: () => void
} & ComponentPropsWithoutRef<'div'>

const Pop: FC<PropsWithChildren<PopoverProps>> = ({ handleClick }) => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'left-end',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        // options: {
        //   offset: [0, 0],
        // },
      },
    ],
  })

  return (
    <Popover className='relative w-full'>
      <Popover.Button
        ref={setReferenceElement}
        className='absolute right-10 -top-24 flex h-16 w-16 items-center justify-center rounded-full border border-slate-600 bg-white shadow-md hover:bg-slate-400 hover:shadow-xl'
      >
        <CgCalendarToday className='h-full w-full p-2' />
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className=''>
          <BigButton
            height='16'
            text='jump to today'
            iconLocation='l'
            OnClickDo={handleClick}
          />
          <div ref={arrowElement} style={styles.arrow} />
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default Pop
