module.exports = {
  plugins: ['prettier', 'only-warn'],
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        bracketSpacing: true,
        parser: 'flow'
      },
    ],
    'react/prop-types': 'off', // ignore broken eslint-plugin-react bug
    'react/no-danger': 'off', // dangerously relying on internal content only
  },
}
