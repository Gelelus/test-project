const path = require(`path`);

const aliases = {
  '@assets': `src/assets`,
  '@modules': `src/modules`,
  '@pages': `src/pages`
}

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  webpack: {
    alias: resolvedAliases
  }
};
