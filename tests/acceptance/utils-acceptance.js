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

const stdout = nodeResult => run(nodeResult)
  .split('\n')
  .filter(line => !/^[>|\\n]/.test(line))
  .map(line => line.replace(/\\n/g, ''))
  .join('');

export { run, stdout }; // eslint-disable-line
