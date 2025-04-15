/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@tldraw/tldraw'],
	},
	output: 'standalone',
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig
