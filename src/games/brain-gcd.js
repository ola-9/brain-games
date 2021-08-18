import getRandomIntInclusive from '../util.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const start = 1;
const end = 50;

const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return getGcd(num2, num1 % num2);
};

const getGameData = () => {
  const number1 = getRandomIntInclusive(start, end);
  const number2 = getRandomIntInclusive(start, end);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  playGame(getGameData, description);
};
