import test from 'ava';
import * as sandbox from '../_utils/sandbox';

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
  // when
  const init = sandbox.init([
    './src',
    './docs',
    './node_modules/**|*ignored_component*',
    'react',
    './src/css/theme.css',
  ]);

  // then
  init.on('close', () => {
    const json = sandbox.getPackageJson();
    t.deepEqual(json.sgrConfig, {
      inputDir: './src',
      outputDir: './docs',
      ignore: './node_modules/**|*ignored_component*',
      type: 'react',
      additionalCssFile: './src/css/theme.css',
    });
    t.end();
  });
});

test.cb('should take the default values when the answers are empties', (t) => {
  // when
  const init = sandbox.init(['', '', '', '', '']);

  // then
  init.on('close', () => {
    const json = sandbox.getPackageJson();
    t.deepEqual(json.sgrConfig, {
      inputDir: './',
      outputDir: './component-docs',
      ignore: './node_module/**',
      type: 'react',
      additionalCssFile: '',
    });
    t.end();
  });
});
