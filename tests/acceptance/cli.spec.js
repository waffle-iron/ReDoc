import test from 'ava';
import fs from 'fs';
import path from 'path';
import { runSync, start } from './utils-acceptance';

const template = fs.readFileSync(path.join(__dirname, 'sandbox-project-template', 'package.json'));
const copyTemplate = () => fs.writeFileSync(path.join(__dirname, 'sandbox-project', 'package.json'), template);

test.before(() => {
  copyTemplate();
  runSync('npm link ../../../');
});

test.after(() => {
  copyTemplate();
});

test('should return a correct version number', (t) => {
  t.regex(runSync('sgr --version'), /\d\.\d\.\d/);
});

test.cb('should white answers in package.json', (t) => {
  // given
  const answers = ['first_answer', 'second_answer', 'third_answer', 'fourth_answer', 'fifth_answer'];
  let idx = 0;

  // when
  const init = start('sgr', ['init']);
  init.stdout.on('data', () => init.stdin.write(`${answers[idx++]}\n`));

  // then
  init.on('close', () => {
    fs.readFile(`${__dirname}/sandbox-project/package.json`, (err, content) => {
      const json = JSON.parse(content);
      t.deepEqual(json.sgrConfig, {
        inputDir: 'first_answer',
        outputDir: 'second_answer',
        ignore: 'third_answer',
        type: 'fourth_answer',
        additionalCssFile: 'fifth_answer',
      });
      t.end();
    });
  });
});
