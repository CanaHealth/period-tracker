/*


export default function Example() {
  return (
    <Footer className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </Footer>
  )
}




*/

import { Ethereum, Polygon } from '@3rdweb/chain-icons'
import { useWeb3 } from '@3rdweb/hooks'
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

import WalletConnectButton from '@/components/buttons/WalletConnect'

type FooterProps = {
  onHoverClass?: string
  onActiveClass?: string
  onFocusClass?: string
  shouldTransition?: boolean
  className?: string
} & ComponentPropsWithoutRef<'div'>

const Footer: FC<PropsWithChildren<FooterProps>> = ({
  onHoverClass,
  onActiveClass,
  onFocusClass,
  shouldTransition,
  className,
}) => {
  const { address, chainId, getNetworkMetadata } = useWeb3()

  return (
    <footer
      className={clsxm(
        ' absolute inset-x-0 bottom-0 mx-auto flex rounded-t-md bg-white',
        className,
        onHoverClass,
        onActiveClass,
        onFocusClass,
        [shouldTransition && 'transition-all ease-out']
      )}
    >
      <nav
        className={`mx-auto 
                    px-4 
                    sm:px-6 lg:px-8
                    `}
        aria-label='Bottom'
      >
        <div
          className={`  flex flex-row 
                        items-center justify-between 
                        space-x-4 border-b 
                        border-indigo-500 
                        py-6
                        lg:border-none
                        `}
        >
          {chainId ? (
            <p> Hi {address ? address.slice(0, 6) : null} ...</p>
          ) : null}
          <WalletConnectButton />
          {chainId ? <p> from</p> : null}

          <div className='flexitems-center group relative justify-center'>
            <div className='required: mx-auto flex h-8 w-8 flex-shrink'>
              {chainId ? chainId === 1 ? <Ethereum /> : <Polygon /> : null}
            </div>
            <span
              className={`
                              
                              border-primary-dark absolute -top-14
                              -left-14 mx-auto
                              hidden
                              h-10 w-max  rounded-md
                              border-b-2
                              bg-gray-300
                              px-4
                              text-center
                              group-hover:flex
                              group-hover:items-center
                              group-hover:justify-center
                  `}
            >
              {chainId && getNetworkMetadata(chainId).chainName}
            </span>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
