/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true
	}
}
const withTM = require('next-transpile-modules')(['lumina-ux']);
module.exports = withTM(nextConfig);
