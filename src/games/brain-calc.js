import getRandomIntInclusive from '../util.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const mathOperations = ['+', '-', '*'];
const start = 1;
const end = 20;

const calcExpression = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null; // д.б. сообщение об ошибке; null потому что ругается linter
  }
};

const calculate = () => {
  const numberOfOperations = mathOperations.length - 1;
  const index = getRandomIntInclusive(0, numberOfOperations);
  const operation = mathOperations[index];
  const number1 = getRandomIntInclusive(start, end);
  const number2 = getRandomIntInclusive(start, end);
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calcExpression(operation, number1, number2));

  return [question, correctAnswer];
};

export default () => {
  playGame(calculate, description);
};
