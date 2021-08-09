import {
  greeting,
  describeGame,
  winMessage,
  failMessage,
} from './cli.js';

const numberOfRounds = 3;

const playGame = (game, description) => {
  const userName = greeting();
  describeGame(description);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [userAnswer, correctAnswer] = game();

    if (userAnswer === correctAnswer) {
      winMessage();
    } else {
      failMessage(userName, userAnswer, correctAnswer);

      return null;
    }
  }
  console.log(`Congratulations, ${userName}!`);

  return null;
};

export default playGame;
