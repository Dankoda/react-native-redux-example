module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },

  settings: {
    react: {
      version: '15.4',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],

  plugins: [
    'react',
    'react-native',
    'flowtype',
  ],

  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },

  rules: {
    'jsx-a11y/anchor-has-content': 0,
    'react/no-unused-prop-types': 0,
    'react/no-children-prop': 0,
    'react/sort-comp': 0,

    'arrow-parens': [2, 'always'],
    'arrow-body-style': 0,
    'consistent-return': 0,
    'default-case': 0,
    indent: [2, 2, { SwitchCase: 1, MemberExpression: 1 }],
    'func-names': 0,
    'max-len': [2, 100],
    'multiline-ternary': 2,
    'no-case-declarations': 0,
    'no-console': 2,
    'no-confusing-arrow': 0,
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 1, maxEOF: 1 }],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-unused-vars': [2, { args: 'none', varsIgnorePattern: '^_$' }],

    // React overrides
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/prefer-stateless-function': 0,

    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,

    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,

    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/space-before-type-colon': [2, 'always'],
  },
};
