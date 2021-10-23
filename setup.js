const fs = require('fs');
const path = require('path');

function createDirectory() {
  const uploadDirs = ['uploads'];

  uploadDirs
    .map((dir) => path.resolve(dir))
    .forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
}

function startSetup() {
  createDirectory();
}

module.exports = startSetup;
