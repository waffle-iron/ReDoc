class Question {
  constructor(query, defaultValue, handler) {
    this.query = query;
    this.defaultValue = defaultValue;
    this.handler = handler;
  }
}

class MultipleResponseQuestion extends Question {
  constructor(query, defaultValue, possibleValues, handler) {
    super(query, defaultValue, handler);
    this.possibleValues = possibleValues;
  }
}

module.exports = { Question, MultipleResponseQuestion };
