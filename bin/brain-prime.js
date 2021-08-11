#!/usr/bin/env node

import playGame from '../src/index.js';
import guessIfNumberPrime from '../src/games/brain-prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(guessIfNumberPrime, description);
