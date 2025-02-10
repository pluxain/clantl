// @ts-check
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
export default tseslint.config(
  eslint.configs.recommended,
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  tseslint.configs.recommended,
  pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    files: ["**/*.{vue,ts,tsx}"],
    plugins: {
      "typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "no-console": "error",
      "vue/no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
