#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');
const CLIForm = require('./CLIForm');

program
  .description('Component showcase generator')
  .version(packageJson.version);

program
  .command('init')
  .description('initialize configuration')
  .action(() => {
    const cliForm = new CLIForm();
    cliForm.askQuestions((configuration) => {
      const packageToUpdatePath = path.join(process.cwd(), 'package.json');
      const packageToUpdate= JSON.parse(fs.readFileSync(packageToUpdatePath));
      packageToUpdate.sgrConfig = configuration;
      fs.writeFileSync(packageToUpdatePath, JSON.stringify(packageToUpdate, null, '  '));
      process.exit();
    });
  });

program
  .command('run')
  .description('generate the documentation')
  .action(() => {
    throw new Error('Not yet implemented')
  });

program.parse(process.argv);