import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    "node_modules",
    "dist",
    "**/*.{cjs,json,html,md,css,scss}",
    "src/assets/**/*",
    "public/**/*",
    ".gitignore",
    ".github",
    "readme.md",
  ]),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);

export default eslintConfig;