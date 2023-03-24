module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prefer-arrow", "prettier"],
  rules: {
    "func-style": ["error", "expression", {
      allowArrowFunctions: true
    }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "no-console": "error",
    "no-unused-vars": "error",
    "prefer-arrow/prefer-arrow-functions": "warn",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-sort-props": "error",
    "sort-imports": "error",
    "sort-keys": ["error", "asc"],
  },
};