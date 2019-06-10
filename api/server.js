// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const {fetchEntriesForContentType} = require('./contentful.js');

app.prepare().then(() => {
  createServer(async (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/b', query);
    }
    else if (pathname === '/b') {
      app.render(req, res, '/a', query);
    }
    // Get Events
    else if (pathname === '/api/events') {
      let entries = await fetchEntriesForContentType('event')
      res.setHeader('Content-Type', 'application/json');
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.end(JSON.stringify(entries, null, 3));
    }
    else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + process.env.PORT || 3000);
  });
});
