import * as React from 'react'

type ColorPaletteProps = {
  colors: { [key: string]: { [key: string]: string } }
} & React.ComponentPropsWithoutRef<'div'>

export default function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className='flex flex-col'>
      {Object.keys(colors).map((color) => (
        <div className='flex flex-col' key={color}>
          <strong className='mt-4 flex h-12 items-center justify-center'>
            {color}:
          </strong>
          <div className='mx-auto grid grid-flow-col-dense items-center justify-center'>
            {Object.keys(colors[color]).map((shade) => (
              <div
                className='flex h-20 w-20 flex-row flex-wrap items-center justify-center rounded-full py-5 text-xs'
                style={{ backgroundColor: colors[color][shade] }}
                key={shade}
              >
                {shade + ':'}
                <div className=' w-full text-center'>
                  {colors[color][shade]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
