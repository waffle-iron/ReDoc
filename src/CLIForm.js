const Configuration = require('./models/Configuration');
const { Question, MultipleResponseQuestion } = require('./models/QuestionTypes');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

class CLIForm {

  constructor() {
    this.currentQuestionIdx = 0;
    this.configuration = new Configuration();

    this.questions = [
      new Question(
        'Where is located your project ?',
        './',
        (val) => {
          this.configuration.inputDir = val;
        }//eslint-disable-line
      ),
      new Question(
        'Where the documentation should be generated ?',
        './component-docs',
        (val) => {
          this.configuration.outputDir = val;
        }//eslint-disable-line
      ),
      new Question(
        'Which pattern do you want ignore ?',
        './node_module/*',
        (val) => {
          this.configuration.ignore = val;
        }//eslint-disable-line
      ),
      new MultipleResponseQuestion(
        'What kind of component are you using ?',
        'react',
        ['react', 'angular2', 'vuejs', 'polymer'],
        (val) => {
          this.configuration.type = val;
        }//eslint-disable-line
      ),
      new Question(
        'Path of an additional CSS file ?',
        '',
        (val) => {
          this.configuration.additionalCssFile = val;
        }//eslint-disable-line
      ),
    ];
  }

  hasNextQuestion() {
    return this.currentQuestionIdx < this.questions.length;
  }

  getNextQuestion() {
    return this.questions[this.currentQuestionIdx++];
  }

  askQuestions(onFormFinished) {
    if (this.hasNextQuestion()) {
      const nextQuestion = this.getNextQuestion();
      rl.question(`${nextQuestion.query}\t`, (val) => {
        nextQuestion.handler(val);
        this.askQuestions(onFormFinished);
      });
    } else {
      onFormFinished(this.configuration);
    }
  }
}

module.exports = CLIForm;
