import { addAlias } from 'module-alias';
import fs from 'fs';
import path from 'path';

const registerAlias = (root: string, folders: string[]): void => {
  folders.map((path) => addAlias(path, `${root}/${path}`));

  // mkdir dirs
  ['uploads']
    .map((dir) => path.resolve(dir))
    .forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
};

export default registerAlias(__dirname, [
  'components',
  'configs',
  'consoles',
  'database',
  'middlewares',
  'routes',
  'shared',
  'websocket',
]);
