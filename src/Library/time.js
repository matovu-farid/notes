export const time = {
  minute: 60,
  hour: 60 * 60,
  day: 60 * 60 * 24,
};
export function getInterval(startTime, endTime) {
  let interval = (endTime - startTime) / 1000;
  const { minute, hour, day } = time;

  let divisor = null;

  let block = "";
  if (interval < minute) {
    block = "second";
    divisor = 1;
  } else if (interval < hour) {
    block = "minute";
    divisor = minute;
  } else if (interval < day) {
    block = "hour";
    divisor = hour;
  } else {
    block = "day";
    divisor = day;
  }

  const dividedInterval = Math.floor(interval / divisor);
  let output = `${dividedInterval} ${block}`;
  if (dividedInterval > 1) output += "s";

  return output;
}
