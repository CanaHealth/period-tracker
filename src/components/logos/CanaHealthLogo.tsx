import Image from 'next/image'
import { FC } from 'react'

import clsxm from '@/lib/clsxm'

type MetaMaskLogoProps = {
  size: number
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

const MetaMaskLogo: FC<MetaMaskLogoProps> = ({ className, size }) => {
  // TODO:

  return (
    <div className={clsxm('mx-auto', className)}>
      <Image
        src='/logos/CanaHealthLogo.svg'
        alt='Cana Health logo'
        width={size}
        height={size}
      />
    </div>
  )
}

export default MetaMaskLogo
