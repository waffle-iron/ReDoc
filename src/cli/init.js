const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = [
  {
    type: 'input',
    name: 'inputDir',
    message: 'Project directory: ',
    default: './',
  },
  {
    type: 'input',
    name: 'outputDir',
    message: 'Documentation output: ',
    default: './component-docs',
  },
  {
    type: 'input',
    name: 'patternToIgnore',
    message: 'Pattern to ignore: ',
    default: './node_modules/*',
  },
  {
    type: 'checkbox',
    name: 'componentsType',
    message: 'King of component: ',
    choices: ['react', 'angular2', 'vuejs', 'polymer'],
    default: ['react'],
    validate: (answer) => {
      if (answer.length < 1) {
        return 'You must at least choose one';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'cssPath',
    message: 'Additional CSS file: ',
    default: '',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`${chalk.green('✨ Congratulation!')} you can find the generated documentation in ${chalk.red(answers.outputDir)}`);
});
