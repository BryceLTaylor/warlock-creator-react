import path from 'path';
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, "src", "index.js"),

    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'warlockCreator.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};