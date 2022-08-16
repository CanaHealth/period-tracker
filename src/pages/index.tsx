import Calendar from '../components/period/calendar/Calendar';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <div className='mx-auto flex h-screen max-w-md flex-col justify-between'>
        <div className='mx-3 rounded-b-lg bg-gray-98'>
          <Calendar />
        </div>
      </div>
    </main>
  );
}

/*
        <div className='mx-8 mb-auto mt-16'>
          <TitleText username={userName} />
        </div>
        
          <div className=' flex  w-11/12 flex-col space-y-4 md:mr-auto'>
            <InfoCallout description='Chance of Pregnancy' value='low' />
            <InfoCallout description='Next Cycle In' value='2 weeks' />
          </div>

                      <CycleCircle timeString='on day' numberString='5' />

        div className='relative flex flex-row items-end justify-around p-2'>
          <MenuButtons size='sm'>⚙️</MenuButtons>
          <MenuButtons size='lg'>📝</MenuButtons>
          <MenuButtons size='sm'>📅</MenuButtons>
          <div className='absolute inset-0 -z-10 rounded-t-3xl bg-gray-98' />
        </div>
*/
