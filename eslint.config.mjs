import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  js.configs.recommended,
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([".next/**", "node_modules/**", "out/**", "build/**"]),
]);