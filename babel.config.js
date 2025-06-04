module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    ['@babel/preset-typescript', {
      isTSX: true,
      allExtensions: true,
    }],
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', {
      pragma: 'React.createElement',
      pragmaFrag: 'React.Fragment',
    }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
        '@babel/preset-typescript',
      ],
    },
  },
};