export function pad(num: number) {
  return (num < 10 ? "0" : "") + num;
}

export function getTomorrowMidnightUnix(date = new Date()) {
  let midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);

  midnight.setDate(midnight.getDate() + 1);

  return Math.floor(midnight.getTime() / 1000);
}