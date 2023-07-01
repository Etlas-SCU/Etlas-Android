module.exports = function (api) {
    api.cache(true);
    return {
        compact: false,
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    moduleName: "@env",
                    path: ".env"
                }
            ]
        ]
    };
};
