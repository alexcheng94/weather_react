//Learning Webpack, Yay!

//Core node module, manipulate file paths etc.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
				use:['style-loader', 'css-loader']
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
		)
	]
};



