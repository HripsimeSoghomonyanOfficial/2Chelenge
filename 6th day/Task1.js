function dayOfYear(date) {
  const [month, day, year] = date.split("/").map(Number);
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  if (isLeapYear(year)) {
    daysInMonth[1] = 29;
  }
  let dayOfYear = 0;
  for (let i = 0; i < month - 1; i++) {
    dayOfYear += daysInMonth[i];
  }
  dayOfYear += day;
  return dayOfYear;
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));
