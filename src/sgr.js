#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');
const CLIForm = require('./CLIForm');

program
  .version(packageJson.version)
  .parse(process.argv);

const cliForm = new CLIForm();

cliForm.askQuestions(() => process.exit());