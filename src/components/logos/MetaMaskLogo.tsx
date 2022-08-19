import Image from 'next/image'
import * as React from 'react'

import clsxm from '@/lib/clsxm'

type MetaMaskLogoProps = {
  size: number
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

const MetaMaskLogo: React.FC<MetaMaskLogoProps> = ({ className, size }) => {
  // TODO:

  return (
    <div className={clsxm('mx-auto', className)}>
      <Image
        src='/logos/metamask-fox.svg'
        alt='Phantom wallet logo'
        width={size}
        height={size}
      />
    </div>
  )
}

export default MetaMaskLogo
