export const getRandomIntInclusive = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getGreatestCommonDivisor = (a, b) => {
  let m = a;
  let n = b;

  if (m < n) {
    const swap = m;
    m = n;
    n = swap;
  }

  if (m % n === 0) {
    return n;
  }

  const k = Math.trunc(m / n);
  const reminder = m - k * n;

  return getGreatestCommonDivisor(n, reminder);
};
