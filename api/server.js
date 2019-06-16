// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http');
const { parse } = require('url');
const { createReadStream } = require('fs');
const express = require('express')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const {fetchEntriesForContentType, fetchEntry} = require('./contentful.js');
const {sendMail} = require('./email.js');
const {newsletterAdd} = require('./newsletter.js');

app.prepare().then(() => {
  const server = express()

  // Parse URL-encoded bodies (as sent by HTML forms)
  // server.use(express.urlencoded());
  // Parse JSON bodies (as sent by API clients)
  server.use(express.json());

  // API: Mail
  server.post('/api/mail/contact', function(req, res){
    let message = req.body.message + '<br /><br /><hr /><br />'
    // Add extra fields, like company name, website, etc)
    if(req.body.name) message += '' + req.body.name + '<br />'
    if(req.body.company) message += '' + req.body.company + '<br />'
    if(req.body.tel) message += '' + req.body.tel + '<br />'
    if(req.body.website) message += '' + req.body.website + '<br />'
    if(req.body.type) message += '<br />💬 I\'m interested in joining the community by ' + req.body.type + '<br />'

    const mail = sendMail({
      name: req.body.name,
      email: req.body.email,
      tel: req.body.tel,
      message: message
    });
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.end(JSON.stringify(mail, null, 3));
  });

  // API: Newsletter
  server.post('/api/newsletter/add', function(req, res){
    const callback = function(data) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.end(JSON.stringify({
        title: data.title,
        status: data.status
      }, null, 3));
    }
    newsletterAdd(req.body, callback);
  });

  server.get('*', async (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // Make sw.js available (service worker)
    if (pathname === '/sw.js') {
      res.setHeader('content-type', 'text/javascript');
      createReadStream('./offline/serviceWorker.js').pipe(res);
    }
    // Make it possible to link to events
    else if (pathname.indexOf('/events/') === 0) {
      const slug = pathname.split('/events/')[1];
      app.render(req, res, '/event', { slug: slug });
    }
    // API: Events
    else if (pathname === '/api/events' || pathname.indexOf('/api/events?') === 0 ) {
      let entries = await fetchEntriesForContentType('event', {
        query: query
      })
      res.setHeader('Content-Type', 'application/json');
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.end(JSON.stringify(entries, null, 3));
    }
    // API: Event
    else if (pathname.indexOf('/api/events/') === 0) {
      const slugFullPath = pathname.split('/events/')[1]
      const date = slugFullPath.split('/')[0]
      const slug = slugFullPath.split('/')[1]
      let entry = await fetchEntry({
        content_type: 'event',
        slug: slug,
        date: date
      })
      res.setHeader('Content-Type', 'application/json');
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.end(JSON.stringify(entry, null, 3));
    }
    else {
      return handle(req, res, parsedUrl);
    }
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
