import getRandomIntInclusive from '../util.js';
import { getAnswer } from '../cli.js';

const mathOperations = ['+', '-', '*'];
const start = 1;
const end = 20;

const calculate = () => {
  const numberOfOperations = mathOperations.length - 1;
  const index = getRandomIntInclusive(0, numberOfOperations);
  const operation = mathOperations[index];
  const number1 = getRandomIntInclusive(start, end);
  const number2 = getRandomIntInclusive(start, end);
  const question = `${number1} ${operation} ${number2}`;
  const userAnswer = Number(getAnswer(question));
  let correctAnswer = '';

  switch (operation) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      console.log('Что здесь будет?');
  }

  return [userAnswer, correctAnswer];
};

export default calculate;
