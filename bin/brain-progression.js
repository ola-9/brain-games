#!/usr/bin/env node

import playGame from '../src/index.js';
import completeProgression from '../src/games/brain-progression.js';

const description = 'What number is missing in the progression?';
playGame(completeProgression, description);
