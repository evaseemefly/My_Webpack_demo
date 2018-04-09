// 引入path包
const path = require('path');
var webpack = require('webpack')
//导入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	//入口文件
	entry: {
        main: ['./main.js','jquery','bootstrap']
        // main: ['./main.js','bootstrap-loader?bootstrapPath=/path/to/bootstrap']
        // vendor: ['jquery','bootstrap']
	},
	//输出文件
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'main.js'
	},
	module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                // options: {
                //     loaders: {
                //         css: ExtractTextPlugin.extract({
                //             use: 'css-loader',
                //             fallback: 'vue-style-loader'
                //         })
                //     }
                // }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // test: /\.css$/,
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader',
                //     fallback: 'style-loader'
                // })
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },

            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    
	devtool: 'source-map',
	/*
	 * Error: Path variable [contenthash] not implemented in this context: css/[name]-[contenthash].css
	 * 路径变量contenthash没有在此上下文中实现 
	 * 不适用contenthash，改为hash
	 */
	plugins: [
		new ExtractTextPlugin({
			filename: "css/[name]_[hash:4].css",
		}),
		new webpack.ProvidePlugin({
			"$": "jquery",
			"jQuery": "jquery",
			"window.jQuery": "jquery"
		})
	]

};

module.exports = config;