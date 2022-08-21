import { useWeb3 } from '@3rdweb/hooks'
import { ComponentPropsWithoutRef, FC } from 'react'

import clsxm from '@/lib/clsxm'

import BigButton from '@/components/buttons/BigButton'

type WalletConnectProps = {
  onHoverClass?: string
  onActiveClass?: string
  onFocusClass?: string
  shouldTransition?: boolean
  className?: string
} & ComponentPropsWithoutRef<'div'>

const WalletConnectButton: FC<WalletConnectProps> = ({
  onHoverClass,
  onActiveClass,
  onFocusClass,
  shouldTransition,
  className,
}) => {
  const { connectWallet, disconnectWallet, address, error } = useWeb3()

  // use state for networkData
  error ? console.log(error) : null

  const handleConnection = () => {
    if (address) {
      disconnectWallet()
    } else {
      connectWallet('injected')
    }
  }
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
      <BigButton OnClickDo={handleConnection} height='10' className='text-sm'>
        {address ? 'Disconnect' : 'Connect'}
      </BigButton>
    </div>
  )
}

export default WalletConnectButton
