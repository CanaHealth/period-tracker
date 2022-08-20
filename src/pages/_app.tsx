import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import { AppProps } from 'next/app'
import 'regenerator-runtime/runtime'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = {
    injected: {},
  }
  return (
    <ThirdwebWeb3Provider connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
