const today = new Date();

today.setHours(4);
today.setMinutes(0);
today.setMilliseconds(0);
today.setSeconds(0);

export const newToday = () => {
  return today;
};

const dayOfMiliseconds = 1000 * 60 * 60 * 24;
const weekOfMiliseconds = dayOfMiliseconds * 7;

export const daysAgo = (days: number) => {
  return new Date(today.getTime() - dayOfMiliseconds * days);
};

export const weeksAgo = (weeks: number) => {
  return new Date(today.getTime() - weekOfMiliseconds * weeks);
};
