'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => {
  const p = path.resolve(appDirectory, relativePath);
  console.log('resolveApp', p);
  return p;
};

let publicPath = process.env.PUBLIC_URL || './';

if (!publicPath.endsWith('/')) {
  publicPath += '/';
}
if (process.env.NODE_ENV === 'development') {
  publicPath = '/';
}

const buildPath = process.env.BUILD_PATH || 'dist';

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp(buildPath),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  publicPath,
  resolveApp,
};
