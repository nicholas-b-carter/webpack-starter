module.exports = {
    test: /\.((ttf|eot|woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$/,
    use: {
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[hash].[ext]'
        }
    }
};