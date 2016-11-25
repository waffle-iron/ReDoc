import test from 'ava';
import * as sandbox from './_utils/sandbox';

test.before.cb((t) => {
  sandbox.setup(t.end);
});

test.after.always(() => {
  sandbox.destroy();
});

test('should return a correct version number', (t) => {
  t.regex(sandbox.execSyncIn('sgr --version'), /\d\.\d\.\d/);
});

test.cb('should white answers in package.json', (t) => {
  // given
  const answers = ['first_answer', 'second_answer', 'third_answer', 'fourth_answer', 'fifth_answer'];
  let idx = 0;

  // when
  const init = sandbox.spawnIn('sgr', ['init']);
  init.stdout.on('data', () => init.stdin.write(`${answers[idx++]}\n`));

  // then
  init.on('close', () => {
    const json = sandbox.getPackageJson();
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
