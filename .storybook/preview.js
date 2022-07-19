import '../src/styles/globals.css'
import * as NextImage from 'next/image'

const OrignalImage = NextImage.default

// deoptimize next image to make it work in storybook
Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: (props) => {
        return <OrignalImage {...props} unoptimized />
    }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
