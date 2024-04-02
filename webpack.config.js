const { join } = require("path");
const SizePlugin = require("size-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  devtool: false,
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    libraryTarget: "umd",
    library: "tailwindcss",
  },
  performance: {
    hints: false,
  },
  resolve: {
    alias: {
      fs: join(__dirname, "fs.js"),
      "fast-glob": join(__dirname, "fast-glob.js"),
      jiti: join(__dirname, "fake-jiti"),
      crypto: require.resolve("crypto-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser"),
      tty: require.resolve("tty-browserify"),
      vm: require.resolve("vm-browserify"),
      url: require.resolve("url/"),
    },
    fallback: {
      perf_hooks: false,
      "@tailwindcss/line-clamp": false,
    },
  },
  module: {
    rules: [
      {
        test: /preflight\.js$/,
        loader: join(__dirname, "loader.js"),
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new SizePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
};
