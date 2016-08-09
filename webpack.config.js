module.exports = {
    devtool: 'source-maps',
    debug: true,

    entry: './app/boot.ts',
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.css']
    },

    output: {
        path: './build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript', exclude: [ /\.(spec|e2e)/ ] },
            { test: /\.(html|css)$/, loader: 'raw-loader' }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: []
};