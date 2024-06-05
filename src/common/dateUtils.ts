export function tryParseDate(date: string): Date | null {
  try {
    return new Date(date as unknown as string);
  } catch (error) {
    console.log(`[client]: error on tryParseDate(${date}) => ${error}`);
    return null;
  }
}

export function mapDateForSqlite(date: Date | string | null, keepTime?: boolean): string | null {
  if (date && !(date instanceof Date)) {
    date = tryParseDate(date);
  }
  const dateFixed = date as Date;
  if (dateFixed) {
    const datePart = dateFixed.toISOString().split('T')[0];
    const timePart = dateFixed.toTimeString().split(' ')[0];
    return keepTime ? `${datePart} ${timePart}` : datePart;
  }
  return null;  
}

function getDaysBetween(dateA: Date, dateB: Date) {
  const DAY_MS = 1000 * 60 * 60 * 24; // ms per day
  const differenceMs = Math.abs(dateA.getTime() - dateB.getTime());
  return Math.round(differenceMs / DAY_MS);
}

export function getTimeSince(dateStr: string | undefined): string {
  let result = '';
  if (dateStr) {
    const date = tryParseDate(dateStr);
    if (date) {
      let days = getDaysBetween(date, new Date());
      let years = Math.floor(days / 365);
      days %= 365;
      let months = Math.floor(days / 30);
      days %= 30;
      result += `(${years}y - ${months}m -  ${ days }d)`
    }
  }
  return result;
}

export function getFormatedDate(dateStr: string | undefined): string | null {
  if (dateStr) {
    const date = tryParseDate(dateStr);
    if (date) {
      const month = date.toLocaleString('default', { month: 'long' });
      return `${month} ${date.getDate()}, ${date.getFullYear()}`
    }
  }
  return null;
}
