import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Configuration for your regular JavaScript files (browser environment)
  {
    files: ["src/**/*.js"], // Example for JS files in src/
    languageOptions: {
      globals: globals.browser, // Using the browser globals for the source files
      ecmaVersion: "latest", // Latest ECMAScript version
      sourceType: "module", // Using ECMAScript modules
    },
    rules: {
      // Add any specific rules here if necessary
    },
  },

  // Configuration for jest.config.js (Node.js environment)
  {
    files: ["jest.config.js"], // Target jest.config.js specifically
    languageOptions: {
      globals: globals.node, // Enable Node.js globals like `module`
      ecmaVersion: "latest", // Use latest ECMAScript
      sourceType: "module", // Use module syntax
    },
    rules: {
      // Add any specific rules here if necessary
    },
  },

  // Configuration for Jest test files (to avoid no-undef errors for describe, it, expect, global, etc.)
  {
    files: ["**/*.test.js"], // Apply to all test files
    languageOptions: {
      globals: {
        ...globals.jest, // Include Jest-specific globals like describe, it, expect
        global: "readonly", // Define `global` as a valid variable in test files
        localStorage: "readonly", // Define `localStorage` as a valid variable in test files
      },
      ecmaVersion: "latest", // Latest ECMAScript version
      sourceType: "module", // Use module syntax
    },
    rules: {
      // Add any Jest-specific linting rules here if needed
    },
  },

  // Applying ESLint's recommended configuration for all JS files
  pluginJs.configs.recommended,
];
