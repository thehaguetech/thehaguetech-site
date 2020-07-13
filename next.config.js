const webpack = require('webpack');

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        );
        config.optimization.minimize = false;
        return config
    }
};
