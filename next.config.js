const webpack = require('webpack');

console.log(process.env.CONTENTFUL_SPACE_ID);
console.log(process.env.CONTENTFUL_ACCESS_TOKEN);

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        );
        config.plugins.push(
            new webpack.DefinePlugin({
                SPACE_ID: JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
                ACCESS_TOKEN: JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
            })
        );
        config.optimization.minimize = false;
        config.node.fs = "empty";
        return config
    }
};