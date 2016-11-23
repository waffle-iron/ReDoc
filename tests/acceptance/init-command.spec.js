import test from 'ava';
import rimraf from 'rimraf';
import { run, stdout } from './utils-acceptance';

test.before(() => {
  run('npm unlink ../../../');
  rimraf.sync('node_modules');
  run('npm link ../../../');
});

test('should return a correction version number', (t) => {
  t.is(stdout('npm run sgr -- --version'), '0.0.1');
});
