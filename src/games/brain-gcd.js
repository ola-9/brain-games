import { getRandomIntInclusive, getGreatestCommonDivisor } from '../util.js';
import { getAnswer } from '../cli.js';

const start = 1;
const end = 50;

const findGreatestCommonDivisor = () => {
  const number1 = getRandomIntInclusive(start, end);
  const number2 = getRandomIntInclusive(start, end);
  const question = `${number1} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  const correctAnswer = getGreatestCommonDivisor(number1, number2);

  return [userAnswer, correctAnswer];
};

export default findGreatestCommonDivisor;
