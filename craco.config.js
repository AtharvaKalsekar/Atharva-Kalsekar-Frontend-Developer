const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
};
