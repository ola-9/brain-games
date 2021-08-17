import readlineSync from 'readline-sync';
import greeting from './cli.js';

const numberOfRounds = 3;

const playGame = (game, description) => {
  const userName = greeting();
  console.log(description);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
