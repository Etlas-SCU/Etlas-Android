const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);

    return {
        ...defaultConfig,
        // Add any custom configuration specific to your project here
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
            assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
            sourceExts: [...defaultConfig.resolver.sourceExts, "svg"]
        }
    };
})();
