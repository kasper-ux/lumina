module.exports = {
	test: /\.m?ts$|\.tsx?$/,
	// exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			onlyCompileBundledFiles: true,
		}
	},
}