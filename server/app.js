// server/app.js
const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();

// Server static assets
app.use(expressStaticGzip(path.resolve(__dirname, '..', 'build'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br', 'gz'],
}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
