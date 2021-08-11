import { getRandomIntInclusive } from '../util.js';
import { getAnswer } from '../cli.js';

const completeProgression = () => {
  const progressionLength = getRandomIntInclusive(5, 10);
  const missingIndex = getRandomIntInclusive(0, progressionLength - 1);
  const startingPoint = getRandomIntInclusive(1, 25);
  const step = getRandomIntInclusive(2, 10);
  const progression = [startingPoint];
  let item = startingPoint;

  for (let i = 0; i < progressionLength; i += 1) {
    item += step;
    progression.push(item);
  }

  const question = [];
  let correctAnswer = null;

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingIndex) {
      question.push('..');
      correctAnswer = progression[i];
    } else {
      question.push([progression[i]]);
    }
  }

  const userAnswer = Number(getAnswer(question.join(' ')));

  return [userAnswer, correctAnswer];
};

export default completeProgression;
