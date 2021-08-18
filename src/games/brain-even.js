import getRandomIntInclusive from '../util.js';
import playGame from '../index.js';

const startOfRange = 1;
const endOfRange = 100;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const number = getRandomIntInclusive(startOfRange, endOfRange);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default () => {
  playGame(getGameData, description);
};
