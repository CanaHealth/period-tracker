import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiBadgeCheck } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'

import clsxm from '@/lib/clsxm'

type BannerProps = {
  showUp?: boolean
  icon?: React.ReactNode
  iconColor?: string
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

const Banner: React.FC<BannerProps> = ({
  showUp = true,
  className,
  icon,
  iconColor,
}) => {
  const [show, setShow] = useState(showUp)

  return (
    <div
      className={clsxm(
        'pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6',
        className
      )}
      aria-live='assertive'
    >
      <div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={show}
          as={Fragment}
          enter='transform ease-out duration-300 transition'
          enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
          enterTo='translate-y-0 opacity-100 sm:translate-x-0'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='p-4'>
              <div className='flex items-center'>
                <div
                  className={clsxm(
                    'flex-shrink-0 text-green-400',
                    iconColor && `text-${iconColor}`
                  )}
                >
                  {icon ? (
                    icon
                  ) : (
                    <HiBadgeCheck className='h-10 w-10' aria-hidden='true' />
                  )}
                </div>
                <div className='ml-3 w-0 flex-1 pt-0.5'>
                  <p className='text-sm font-medium text-gray-900'>
                    Successfully saved!
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Anyone with a link can now view this file.
                  </p>
                </div>
                <div className='ml-4 flex flex-shrink-0'>
                  <button
                    type='button'
                    className='inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    <span className='sr-only'>Close</span>
                    <ImCross className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default Banner