module.exports = {
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.ts$|tsx|js/,
			exclude: /node_modules/
		}]
	},
}