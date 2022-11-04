import * as React from 'react'

import Calendar from '@/components/calendar/Calendar'
import Layout from '@/components/layout/Layout'
export default function DashboardPage() {
  return (
    <Layout>
      <div id='calendar' className='mx-auto flex max-w-xl'>
        <Calendar />
      </div>
    </Layout>
  )
}
