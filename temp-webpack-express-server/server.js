const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

const server = app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New Connection :)')
  // socket.emit('action', { type: 'NEW_CONNECTION', payload: {data: 'hello'} });

  socket.on('action', (action) => {
    // console.log('Action received on server: ', action)
    switch(action.type) {
      case 'UPDATE_EDITOR_VALUES': {
        console.log('UPDATE')
        socket.emit('action', action)
      }
    }
  });
  socket.on('close', () => {
    console.log('Closed Connection :(')
  })
});