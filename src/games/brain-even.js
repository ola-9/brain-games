import { getAnswer } from '../cli.js';
import getRandomIntInclusive from '../util.js';

const startOfRange = 1;
const endOfRange = 100;

const parityCheck = () => {
  const question = getRandomIntInclusive(startOfRange, endOfRange);
  const userAnswer = getAnswer(question);
  const correctAnswer = (Number(question) % 2 === 0) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};

export default parityCheck;
