import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "func-style": [
        "error",
        "expression",
        {
          allowArrowFunctions: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "no-console": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": "error",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]);

export default eslintConfig;
