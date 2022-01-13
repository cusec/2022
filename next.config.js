// eslint-disable-next-line no-undef
module.exports = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    webpack: config => {
        // Unset client-side javascript that only works server-side
        config.resolve.fallback = { fs: false, module: false };

        return config;
    },
    target: "serverless"
};