import express from 'express';
import webpack from 'webpack';
import * as webpackConfig from '../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const hostName = 'localHost';
const port = '8002';

const compiler = webpack(webpackConfig.default);
let middlewareOptions = {};

let app = express();

app.use(webpackDevMiddleware(compiler, middlewareOptions));
app.use(webpackHotMiddleware(compiler, {reload: true}));

let server = app.listen(port, () => {
  console.log(`express app listening at ${hostName}:${port}`);
});
