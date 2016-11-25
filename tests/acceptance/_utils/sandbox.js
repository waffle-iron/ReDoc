import { execSync, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';
import { ncp } from 'ncp';

ncp.limit = 16;

const TEMPLATE_PROJECT_PATH = path.join(__dirname, 'sandbox-project-template');
const SANDBOX_PROJECT_PATH = path.join(__dirname, '.sandbox-project');
const IN_SANDBOX_OPT = { cwd: SANDBOX_PROJECT_PATH };

const execSyncIn = command => execSync(command, IN_SANDBOX_OPT).toString();

const spawnIn = (command, options) => spawn(command, options, IN_SANDBOX_OPT);

const getPackageJson = () => JSON.parse(fs.readFileSync(path.join(SANDBOX_PROJECT_PATH, 'package.json')));

const setup = (cb) => {
  ncp(TEMPLATE_PROJECT_PATH, SANDBOX_PROJECT_PATH, {}, () => {
    try {
      execSyncIn('npm link ../../../../');
    } catch (e) {
      // console.error(e);
    } finally {
      cb();
    }
  });
};
const destroy = () => rimraf.sync(SANDBOX_PROJECT_PATH);

export {
  execSyncIn,
  spawnIn,
  setup,
  destroy,
  getPackageJson,
};
