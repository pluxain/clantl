export default {
  "*.{vue,ts,tsx}": [
    () => "npx vue-tsc -p tsconfig.app.json --noEmit --pretty",
    "npx @biomejs/biome check --write",
  ],
  "*.{md,mjs,html,json}": ["npx @biomejs/biome check --write"],
};
