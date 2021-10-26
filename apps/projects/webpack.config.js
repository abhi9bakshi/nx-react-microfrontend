const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './apps/projects/src/app/Button',
      },
      shared: {
        ...dependencies,
      },
    })
  );
  config.output.publicPath = 'http://localhost:4201/';

  return config;
};
