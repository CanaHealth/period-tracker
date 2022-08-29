import Head from 'next/head'

import Calendar from '@/components/calendar/Calendar'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cana Health</title>
      </Head>
      <main className=' min-w-max'>
        <div className='mx-auto flex max-w-xl flex-col justify-between space-y-10'>
          <Calendar />
        </div>
        <Footer />
      </main>
    </>
  )
}
