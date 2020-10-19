const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');

  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    })
  )
  
  return config;
};