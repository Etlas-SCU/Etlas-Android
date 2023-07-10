const { getDefaultConfig } = require("expo/metro-config");

module.exports = async function (asyncConfig) {
    const defaultConfig = await getDefaultConfig(__dirname, asyncConfig);

    defaultConfig.resolver.assetExts.push("hcscript");
    defaultConfig.transformer.assetPlugins = [
        "expo-asset/tools/hashAssetFiles",
    ];

    return {
        ...defaultConfig,
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transformer"),
        },
        resolver: {
            assetExts: defaultConfig.resolver.assetExts.filter(
                (ext) => ext !== "svg"
            ),
            sourceExts: [...defaultConfig.resolver.sourceExts, "svg", "obj"],
        },
    };
};
