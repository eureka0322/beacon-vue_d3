module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'standard'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-parens': 0,
    'eqeqeq': 0,
    'semi': 0,
    "keyword-spacing": 0,
    "brace-style": 0,
    'spaced-comment': 0,
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "padded-blocks": ["error", { "switches": "never" }],
    "space-in-parens": 0,
    "no-multi-spaces": 0,
    "quotes": 0,
    "curly": 0,
    "handle-callback-err": 0
  }
}
