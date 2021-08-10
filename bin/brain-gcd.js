#!/usr/bin/env node

import playGame from '../src/index.js';
import findGreatestCommonDivisor from '../src/games/brain-gcd.js';

const description = 'Find the greatest common divisor of given numbers.';
playGame(findGreatestCommonDivisor, description);
