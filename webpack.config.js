//Learning Webpack, Yay!

//Core node module, manipulate file paths etc.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  //react entry file
  entry: "./src/index.js",

  //where we want our compiled code to go, i.e., one bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
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
			},
			{
				test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				loader: 'file-loader?name=[name].[ext]'
			}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      //We want to use a template
      //(add index_bundle.js script tag into existing html file)
      //rather than letting HtmlWebpackPlugin create an html file from scratch
      //hence we specify a template option
      { template: "./src/index.html" }
    ),
    new ManifestPlugin({
      filename: "manifest.json",
      seed: {
        name: "Yes, Another Weather App",
        short_name: "Weather!",
        lang: "en-US",
        start_url: "/",
        display: "standalone",
        background_color: "white",
        theme_color: "#999999",
        icons: [
          {
            src: "android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            density: "0.75"
          },
          {
            src: "android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            density: "1.0"
          },
          {
            src: "android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            density: "1.5"
          },
          {
            src: "android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0"
          },
          {
            src: "android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            density: "3.0"
          },
          {
            src: "android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            density: "4.0"
          }
        ]
      }
    })
  ]
};
