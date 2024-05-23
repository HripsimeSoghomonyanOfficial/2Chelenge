function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const timeDifference = d2 - d1;
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

  return Math.abs(dayDifference);
}
const date1 = "2023-05-20";
const date2 = "2024-06-01";
const differenceInDays = dateDifference(date1, date2);

console.log(differenceInDays);
