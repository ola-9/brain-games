import readlineSync from 'readline-sync';
import name from './cli.js';

const startOfRange = 1;
const endOfRange = 100;

const getRandomIntInclusive = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const numberOfQuestions = 3;

const parityCheck = () => {
  const userName = name();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer = '';

  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const question = getRandomIntInclusive(startOfRange, endOfRange);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = (Number(question) % 2 === 0);
    correctAnswer = isEven ? correctAnswer = 'yes' : correctAnswer = 'no';
    const isCorrect = (answer === correctAnswer);

    if ((isEven && isCorrect) || (!isEven && isCorrect)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${userName}!`);

      return null;
    }
  }

  console.log(`Congratulations, ${userName}!`);

  return null;
};

export default parityCheck;
