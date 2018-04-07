// 引入path包
const path = require('path');
//导入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	//入口文件
	entry: {
		main: './main'
	},
	//输出文件
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'main.js'
	},
	module: {
		//是一个数组，定义了规则
		//方式1：
		//		rules: [{
		//			test: /\.css$/,
		//			use: ['style-loader', 'css-loader']
		//		}]

		//方式2：
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		},{
			test:/\.js$/,
			use:['babel-loader'],
		},
		{
			test:/\.vue$/,
			use:['vue-loader'],
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [
			{
				loader: 'file-loader',
				options: {}  
			}
			]
		}
		]
	},
	devtool:'source-map',
	//方式2：
	//	plugins: [
	//		new ExtractTextPlugin({
	//			//从.js文件中提取出来的.css文件的名称
	//			filename: `[name]_[contenthash:8].css`,
	//		})
	//	]
	//自己的尝试（有错误）
	//	plugins: [
	//  new ExtractTextPlugin(options: filename | '[name]_[contenthash:8].css')
	//]
	
	
	/*
	 * Error: Path variable [contenthash] not implemented in this context: css/[name]-[contenthash].css
	 * 路径变量contenthash没有在此上下文中实现 
	 * 不适用contenthash，改为hash
	 */
	 plugins: [
	 new ExtractTextPlugin({
	 	filename: "css/[name]_[hash:4].css",
	 }),
	 ]

	};

	module.exports = config;