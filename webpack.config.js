//Learning Webpack, Yay!

//Core node module, manipulate file paths etc.
const path = require("path");
const PUBLIC_PATH = "https://alexcheng94.github.io/weather_react/";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  //react entry file
  entry: "./src/index.js",
  //where we want our compiled code to go, i.e., one bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: PUBLIC_PATH
  },
  //specify a loader in module object below
  module: {
    rules: [
      {
        //RegExp, look for all .js files for babel to compile
        test: /\.js$/,
        //RegExp, don't touch anything in node_modules
        exclude: /node_modules/,
        //use babel-loader
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      { template: "./src/index.html" }
    ),
    new CopyWebpackPlugin([
      {
        from: "./src/assets",
        to: "assets"
      }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: "Weather",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: PUBLIC_PATH + "index.html",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    }),
    new ManifestPlugin({
      filename: "manifest.json",
      seed: {
        name: "Yet Another Weather App",
        short_name: "Weather!",
        lang: "en-US",
        start_url: ".",
        display: "standalone",
        theme_color: "#CCBFEE",
        background_color: "white",
        icons: [
          {
            src: "./assets/icons/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            density: "0.75"
          },
          {
            src: "./assets/icons/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            density: "1.0"
          },
          {
            src: "./assets/icons/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            density: "1.5"
          },
          {
            src: "./assets/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0"
          },
          {
            src: "./assets/icons/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            density: "3.0"
          },
          {
            src: "./assets/icons/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            density: "4.0"
          },
          {
            src: "./assets/icons/splash-screen.png",
            sizes: "1157x1157",
            type: "image/png",
            density: "4.0"
          }
        ]
      }
    })
  ]
};
