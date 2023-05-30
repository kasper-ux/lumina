module.exports = {
	test: /\.m?ts$|\.tsx?$/,
	// exclude: /node_modules/,
	use: {
		loader: "ts-loader",
		options: {
			onlyCompileBundledFiles: true,
		}
	},
}