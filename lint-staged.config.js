export default {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "**/*.{js,jsx,ts,tsx,json}": ["prettier --write", "npm run lint"],
};
