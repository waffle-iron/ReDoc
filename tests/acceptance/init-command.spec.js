import test from 'ava';
import { execSync } from 'child_process';
import path from 'path';

const run = (command) => {
  let stdout;
  try {
    stdout = execSync(command, { cwd: path.resolve(__dirname, 'sandbox-project') }).toString();
  } catch (e) {
    // log something with winston
  }
  return stdout;
};

const result = nodeResult => nodeResult
    .split('\n')
    .filter(line => !/^[>|\\n]/.test(line))
    .map(line => line.replace(/\\n/g, ''))
    .join('');

test.before(() => {
  run('npm unlink ../../../');
  run('rm -Rf node_modules');
  run('npm link ../../../');
});

test((t) => {
  t.is(result(run('npm run sgr -- --version')), '0.0.1');
});
