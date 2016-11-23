const Configuration = require('./models/Configuration');
const { Question, MultipleResponseQuestion } = require('./models/QuestionTypes');


class ConfigurationBuilder {

  constructor() {
    this.currentQuestionIdx = 0;
    this.configuration = new Configuration();

    this.questions = [
      new Question(
        'Where is located your projet ?',
        './',
        ((val) => {
          this.configuration.inputDir = val;
        })//eslint-disable-line
      ),
      new Question(
        'Where the documentation should be generated ?',
        './component-docs',
        (val) => {
          this.configuration.inputDir = val;
        }//eslint-disable-line
      ),
      new Question(
        'Which pattern do you want ignore ?',
        './node_module/*',
        (val) => {
          this.configuration.inputDir = val;
        }//eslint-disable-line
      ),
      new MultipleResponseQuestion(
        'What kind of component are you using ?',
        'react',
        ['react', 'angular2', 'vuejs', 'polymer'],
        (val) => {
          this.configuration.inputDir = val;
        }//eslint-disable-line
      ),
      new Question(
        'Path of an additional CSS file ?',
        '',
        (val) => {
          this.configuration.inputDir = val;
        }//eslint-disable-line
      ),
    ];
  }

  hasNext() {
    return this.currentQuestionIdx < this.questions.length;
  }

  next() {
    return this.questions[this.currentQuestionIdx++];
  }
}

module.exports = ConfigurationBuilder;
