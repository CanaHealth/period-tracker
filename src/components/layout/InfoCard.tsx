import * as React from 'react'

import clsxm from '@/lib/clsxm'

type InfoCardProps = {
  walletAddress?: string
  subheading?: string
  heading?: string
  description?: string
  buttonText?: string
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

const InfoCard: React.FC<InfoCardProps> = ({
  walletAddress = 'generate',
  subheading,
  heading,
  description,
  buttonText,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsxm('max-w-sm bg-white shadow sm:rounded-lg', className)}
      {...rest}
    >
      <div className='px-4 py-5 sm:p-6'>
        <div
          // or you could use an existing wallet prompt
          className='py-1 text-xs text-gray-500'
        >
          {subheading}
        </div>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          {heading}
        </h3>
        <div className=' mt-2  flex flex-col space-y-4'>
          <div className='max-w-xl text-sm text-gray-500'>
            <p>{description}</p>
          </div>
          <div className='mx-auto bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xs text-transparent'>
            {walletAddress}
          </div>
          <button
            type='button'
            // onclick copy wallet address to clipboard and open new tab with moonpay.com
            onClick={() => {
              navigator.clipboard.writeText(walletAddress)
              window.open('https://www.moonpay.com/buy/sol')
            }}
            className='inline-flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
