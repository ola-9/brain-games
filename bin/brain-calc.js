#!/usr/bin/env node

import playGame from '../src/index.js';
import calculate from '../src/games/brain-calc.js';

const description = 'What is the result of the expression?';
playGame(calculate, description);
