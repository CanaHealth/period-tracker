import * as React from 'react';

type titleTextProps = {
  username: string;
} & React.ComponentPropsWithoutRef<'div'>;

/** Write a function that gives me a greeting for the user based on time of day.
 * @param {string} username - The username of the user.
 * @returns {string} - A greeting for the user.
 */
function greetUserBasedOnTime() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return 'Good morning';
  } else if (currentHour < 17) {
    return 'Good afternoon';
  } else if (currentHour < 23) {
    return 'Good evening';
  } else {
    return 'Good night';
  }
}

export default function TitleText({ ...rest }: titleTextProps) {
  return (
    <span className='text-3xl'>
      <p className=''>{greetUserBasedOnTime()},</p>
      <p className='font-bold'>{rest.username}</p>
    </span>
  );
}
