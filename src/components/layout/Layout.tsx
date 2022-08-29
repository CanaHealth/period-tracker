import * as React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gray-200'>
      <>{children}</>
    </div>
  )
}
