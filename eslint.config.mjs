import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Configuration for your regular JavaScript files (browser environment)
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
        window: "readonly", // Allowing window as a global
        localStorage: "readonly", // Add this line to define `localStorage` as a global variable
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Applying ESLint's recommended configuration for all JS files
  pluginJs.configs.recommended,
];
