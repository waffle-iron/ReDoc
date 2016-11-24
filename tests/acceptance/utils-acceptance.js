import { execSync, spawn } from 'child_process';
import path from 'path';

const runSync = (command) => {
  let stdout;
  try {
    stdout = execSync(command, { cwd: path.resolve(__dirname, 'sandbox-project') }).toString();
  } catch (e) {
    // log something with winston
  }
  return stdout;
};

const start = (command, options) => spawn(command, options, { cwd: path.resolve(__dirname, 'sandbox-project') });


export { runSync, start }; // eslint-disable-line
