import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

import tailwindcss from "eslint-plugin-tailwindcss"
import react from "eslint-plugin-react"
import importPlugin from "eslint-plugin-import"
import prettier from "eslint-config-prettier"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      tailwindcss,
      react,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",

      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],

      "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
      "object-curly-spacing": ["warn", "always"],
      "comma-dangle": ["warn", "only-multiline"],

      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "ignore" }],
      "react/self-closing-comp": "warn",
      "react/jsx-indent": ["warn", 2],
      "react/jsx-indent-props": ["warn", 2],
      "react/jsx-tag-spacing": ["warn", { beforeSelfClosing: "always", afterOpening: "never" }],
      "react/jsx-pascal-case": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-key": "warn",
    },
  },
  prettier,
]
