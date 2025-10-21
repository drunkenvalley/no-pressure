import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const nextFlatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  ...nextFlatCompat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript"],
  }),
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
