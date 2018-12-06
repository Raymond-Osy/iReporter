module.exports = {
    "root": true,
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "rules": {
        "one-var": 0,
        "no-console": "off",
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "radix": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "linebreak-style": ["error", "windows"],
        "curly": ["error", "multi-line"],
        "import/no-unresolved": [2, { "commonjs": true }],
        "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
        "valid-jsdoc": ["error", {
            "requireReturn": true,
            "requireReturnType": true,
            "requireParamDescription": false,
            "requireReturnDescription": true
        }],
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }]
    }
  }