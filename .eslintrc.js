module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "env": {
  "browser": true,
  "es6": true
  },
  "parserOptions": {
  "ecmaFeatures": {
  "experimentalObjectRestSpread": true,
  "jsx": true
  },
  "sourceType": "module"
  },
  "plugins": [
  "react"
  ],
  "rules": {
  "linebreak-style":0,
  "object-shorthand":0,
  "quotes": 0,
  "object-curly-spacing": 0,
  "max-len": 0,
  "spaced-comment": 0,
  "new-cap": 0,
  "func-names": 0,
  "no-console": 0,
  "prefer-arrow-callback": 0,
  "react/prefer-stateless-function": 0,
  "space-before-blocks": 0,
  "no-useless-constructor": 0,
  "arrow-body-style": 0,
  "semi": [
  "error",
  "always"
  ]
  }
};
