import Image from 'next/image'
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

type LogoHolderProps = {
  onHoverClass?: string
  onActiveClass?: string
  onFocusClass?: string
  shouldTransition?: boolean
  className?: string
  size?: number
  src: string
  alt: string
} & ComponentPropsWithoutRef<'div'>

const LogoHolder: FC<PropsWithChildren<LogoHolderProps>> = ({
  onHoverClass,
  onActiveClass,
  onFocusClass,
  shouldTransition,
  className,
  size = 10,
  src,
  alt,
}) => {
  // TODO:

  return (
    <div
      className={clsxm(
        '',
        className,
        onHoverClass,
        onActiveClass,
        onFocusClass,
        [shouldTransition && 'transition-all ease-out']
      )}
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  )
}

export default LogoHolder
