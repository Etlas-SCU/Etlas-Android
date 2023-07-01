module.exports = (env, options) => {
    // other Webpack configuration properties...
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    query: { compact: false }
                },
                // other rules for different file types...
            ]
        }
    };
};
