const {fetchEntriesForContentType} = require('./contentful.js')

const populateSitemap = async function() {
  let urls = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/international-business', changefreq: 'monthly', priority: 0.9 },
    { url: '/co-creation', changefreq: 'monthly', priority: 0.9 },
    { url: '/community', changefreq: 'monthly', priority: 0.9 },
    { url: '/meetings-events-labs', changefreq: 'monthly', priority: 0.9 },
    { url: '/coworking', changefreq: 'monthly', priority: 0.9 },
    { url: '/events', changefreq: 'monthly', priority: 0.9 },
    { url: '/pricing', changefreq: 'monthly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
  ]
  let events = await fetchEntriesForContentType('event');
  for(let idx in events) {
    let date = events[idx].fields.datetime.substr(0, 10);
    urls.push({
      url: '/events/' + date + '/' + events[idx].fields.slug, changefreq: 'weekly', priority: 0.8,
    })
  }
  return urls;
}

module.exports = {populateSitemap}
