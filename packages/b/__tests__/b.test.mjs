import b from '../lib/index.mjs'
import assert from 'assert'
const { strict } = assert
strict.strictEqual(b(), 'Hello from b')
console.info('a tests passed')
