#!/usr/bin/env node

'use strict';

// eslint-disable-next-line no-unused-expressions

import cli from '../src/cli.mjs'
import a from '@andytestgroup/lerna-test-a'
import b from '@andytestgroup/lerna-test-b'
console.log(a())
console.log(b())

cli().parse(process.argv.slice(2));

