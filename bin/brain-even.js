#!/usr/bin/env node

import playGame from '../src/index.js';
import parityCheck from '../src/games/brain-even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
playGame(parityCheck, description);
