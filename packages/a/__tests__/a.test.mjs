import a from '../lib/index.mjs'
import assert from 'assert'
import chalk from 'chalk';
const { strict } = assert
strict.strictEqual(a(), chalk.blue('hellow a'))
console.info('a tests passed')
