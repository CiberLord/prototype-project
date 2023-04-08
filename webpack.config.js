const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
    return {
        entry: {
            server: './src/index.ts',
        },
        output: {
            filename: 'server.js',
            path: path.resolve(process.cwd(), 'dist'),
            clean: true,
        },

        mode: env.NODE_ENV || 'development',

        devtool: env.NODE_ENV === 'production' ? undefined : 'inline-source-map',

        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
        },

        externalsPresets: { node: true },

        externals: [nodeExternals()],

        module: {
            rules: [
                {
                    test: /\.ts/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            modules: 'auto',
                                        },
                                    ],

                                    ['@babel/preset-typescript'],
                                ],
                            },
                        },
                    ],
                    exclude: path.resolve(__dirname, 'node_modules'),
                },
            ],
        },
    };
};
