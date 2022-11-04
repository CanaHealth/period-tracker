import Seo from '@comps/Seo'
import * as React from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <main className='mx-auto flex min-h-screen max-w-6xl flex-col space-y-16 px-5 text-brand-600'>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
