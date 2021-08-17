import getRandomIntInclusive from '../util.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const start = 1;
const end = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const guessIfNumberPrime = () => {
  const number = getRandomIntInclusive(start, end);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => {
  playGame(guessIfNumberPrime, description);
};
