module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  babelOptions: {
    presets: ['@babel/preset-react'],
  },
  // some issues was solved with that /\ /\ /\
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'no-console': 0,
    'no-alert': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 1,
    'prefer-arrow-callback': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
