function formatTime(t) {
  const days = Math.floor(t / (24 * 60 * 60));
  t %= 24 * 60 * 60;
  const hours = Math.floor(t / (60 * 60));
  t %= 60 * 60;
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

const t = 256482;
const formattedTime = formatTime(t);
console.log(formattedTime);
