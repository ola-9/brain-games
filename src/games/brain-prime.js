import { getRandomIntInclusive, checkIfPrime } from '../util.js';
import { getAnswer } from '../cli.js';

const start = 1;
const end = 100;

const guessIfNumberPrime = () => {
  const number = getRandomIntInclusive(start, end);
  const isPrime = checkIfPrime(number);
  const correctAnswer = isPrime ? 'yes' : 'no';
  const userAnswer = getAnswer(number);

  return [userAnswer, correctAnswer];
};

export default guessIfNumberPrime;
