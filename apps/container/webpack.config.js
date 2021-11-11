const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  config.context = process.cwd();

  nrwlConfig(config);
  return {
    ...config,
    optimization: {
      ...config.optimization,
      runtimeChunk: false
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'app1',
        remotes: {
          app2: `app2@${getRemoteEntryUrl(4201)}`,
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
    ],
    output: {
      uniqueName: 'app1',
      publicPath: 'auto',
      clean: true,
    }
  };
};

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
