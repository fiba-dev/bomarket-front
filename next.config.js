/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["res.cloudinary.com", "dl.airtable.com"],
	},
};

module.exports = nextConfig;
