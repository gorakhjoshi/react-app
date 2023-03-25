module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/require-default-props": ["error", { functions: "defaultArguments" }],
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
  },
  overrides: [
    {
      files: ["*.json", "*.json5"], // Specify the extension or pattern you want to parse as JSON.
      parser: "jsonc-eslint-parser", // Set this parser.
    },
  ],
};
