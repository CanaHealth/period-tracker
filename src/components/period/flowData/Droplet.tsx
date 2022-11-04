import { BsDroplet } from 'react-icons/bs'

import clsxm from '@/lib/clsxm'

import { optionOfFlow } from './utils'

type DropletProps = {
  flow: optionOfFlow
  className?: string
}

const Droplet: React.FC<DropletProps> = ({ className, flow }) => {
  return (
    <div
      aria-hidden='true'
      className={clsxm(
        'absolute inset-0 flex flex-col items-center justify-center text-lg',
        [flow === 'heavy' && '  scale-100'],
        [flow === 'average' && 'scale-90 '],
        [flow === 'light' && '  scale-75 '],
        [flow === undefined && 'hidden'],
        className
      )}
    >
      <BsDroplet />
    </div>
  )
}

export default Droplet
