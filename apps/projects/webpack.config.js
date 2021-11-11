const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../../package.json');
const path = require("path");

module.exports = (config, context) => {
  config.context = process.cwd();
  config.optimization.runtimeChunk = false;
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './apps/projects/src/app/Button',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    })
  );
  config.output = {
    uniqueName: 'app2',
    publicPath: 'auto',
    clean: true,
  }
  return config;
};
