import * as React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gray-light-dark'>
      <>{children}</>;
    </div>
  )
}
