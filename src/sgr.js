#!/usr/bin/env node

const program = require('commander');
const readline = require('readline');
const packageJson = require('../package.json');
const ConfigurationBuilder = require('./ConfigurationBuilder');
const rl = readline.createInterface(process.stdin, process.stdout);

program
  .version(packageJson.version)
  .parse(process.argv);

const confBuilder = new ConfigurationBuilder();

const askQuestion = (onFormFinished) => {
  if (confBuilder.hasNext()){
    const question = confBuilder.next();
    rl.question(question.query + '\t', (val) => {
      question.handler(val);
      askQuestion(onFormFinished);
    });
  } else {
    onFormFinished(confBuilder.configuration);
  }
};

askQuestion(() => {
  process.exit();
});