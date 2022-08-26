import Head from 'next/head'

import Footer from '@/components/layout/Footer'
import Layout from '@/components/layout/Layout'
import Calendar from '@/components/period/calendar/Calendar'
import PeriodDataDisplay from '@/components/period/data_display/PeriodDataDisplay'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Cana Health</title>
      </Head>
      <main className='h-full min-h-screen w-full'>
        <div className='mx-auto flex max-w-xl flex-col justify-start space-y-10'>
          <Calendar />
          <PeriodDataDisplay label={<div>Tu</div>} />
        </div>
        <Footer />
      </main>
    </Layout>
  )
}
