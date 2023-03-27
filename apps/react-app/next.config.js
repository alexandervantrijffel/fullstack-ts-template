const withPlugins = require("next-compose-plugins");
const path = require("path");

// https://stackoverflow.com/questions/54183145/next-js-config-multiple-plugin-configuration
module.exports = withPlugins([], {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    reactStrictMode: true,
    experimental: {
        outputFileTracingRoot: path.join(__dirname, "../.."),
        fontLoaders: [
            { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ],
    },
    output: "standalone",
});
