import getRandomIntInclusive from '../util.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (startingPoint, step, length) => {
  let item = startingPoint;
  const progression = [item];

  for (let i = 0; i < length; i += 1) {
    item += step;
    progression.push(item);
  }

  return progression;
};

const completeProgression = () => {
  const progressionLength = getRandomIntInclusive(5, 10);
  // const missingIndex = getRandomIntInclusive(0, progressionLength - 1);
  const missingIndex = 0;
  const startingPoint = getRandomIntInclusive(1, 25);
  const step = getRandomIntInclusive(2, 10);
  const progression = createProgression(startingPoint, step, progressionLength);
  const correctAnswer = String(progression[missingIndex]);
  progression[missingIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  playGame(completeProgression, description);
};
