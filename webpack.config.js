var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/Layout.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            plugins: ["react-html-attrs"]
        }]
    }
};

module.exports = config;
