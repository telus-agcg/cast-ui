const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          propFilter: prop => {
            return (
              prop.parent == null ||
              (prop.parent.name.indexOf('HTMLAttributes') < 0 &&
                prop.parent.name.indexOf('DOMAttributes') < 0)
            );
          },
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
