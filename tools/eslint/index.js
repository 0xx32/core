import antfu from "@antfu/eslint-config";
import perfectionist from "eslint-plugin-perfectionist";

export const eslintConfig = antfu(
  {
    stylistic: false,
    formatters: false,
    typescript: true,
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            ["internal"],
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "style",
            "side-effect-style",
            "unknown",
          ],
          internalPattern: ["^~/.*", "^@/.*"],
          newlinesBetween: "always",
          order: "asc",
          type: "natural",
        },
      ],
    },
  }
);
