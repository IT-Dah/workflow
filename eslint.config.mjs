import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  // Applying ESLint's recommended configuration globally
  {
    ...pluginJs.configs.recommended,
  },

  // Configuration for regular JavaScript files (browser environment)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for jest.config.js (Node.js environment)
  {
    files: ["jest.config.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        global: "readonly",
        window: "readonly",
        localStorage: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for Cypress test files
  {
    files: ["cypress/**/*.js"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.cypress,
        cy: "readonly", // Add `cy` explicitly here as a global variable
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "cypress/no-unnecessary-waiting": "error", // Example rule for Cypress
    },
  },
];
