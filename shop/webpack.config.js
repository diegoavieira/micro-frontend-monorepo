const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const packageJson = require("./package.json");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

const port = 8084;

module.exports = {
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "shop",
      filename: "remoteEntry.js",
      exposes: {
        "./ShopApp": path.resolve(__dirname, "./src/bootstrap.ts"),
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

      // },

      shared: packageJson.dependencies,
    }),
    sharedMappings.getPlugin(),
  ],
};
