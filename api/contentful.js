'use strict'

const contentful = require('contentful');
const chalk = require('chalk');
const Table = require('cli-table2');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// Entry point of the boilerplate, called at the end.
function runBoilerplate () {
  displayContentTypes()
  .then(displayEntries)
  .then(() => {
    console.log('Want to go further? Feel free to check out this guide:')
    console.log(chalk.cyan('https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/\n'))
  })
  .catch((error) => {
    console.log(chalk.red('\nError occurred:'))
    if (error.stack) {
      console.error(error.stack)
      return
    }
    console.error(error)
  })
}

function displayContentTypes () {
  console.log(chalk.green('Fetching and displaying Content Types ...'))

  return fetchContentTypes()
  .then((contentTypes) => {
    // Display a table with Content Type information
    const table = new Table({
      head: ['Id', 'Title', 'Fields']
    })
    contentTypes.forEach((contentType) => {
      const fieldNames = contentType.fields
        .map((field) => field.name)
        .sort()
      table.push([contentType.sys.id, contentType.name, fieldNames.join(', ')])
    })
    console.log(table.toString())

    return contentTypes
  })
}

function displayEntries (contentTypes) {
  console.log(chalk.green('Fetching and displaying Entries ...'))

  return Promise.all(contentTypes.map((contentType) => {
    return fetchEntriesForContentType(contentType)
    .then((entries) => {
      console.log(`\These are the first 100 Entries for Content Type ${chalk.cyan(contentType.name)}:\n`)

      // Display a table with Entry information
      const table = new Table({
        head: ['Id', 'Title']
      })
      entries.forEach((entry) => {
        table.push([entry.sys.id, entry.fields[contentType.displayField] || '[empty]'])
      })
      console.log(table.toString())
    })
  }))
}

// Load all Content Types in your space from Contentful
function fetchContentTypes () {
  return client.getContentTypes()
  .then((response) => response.items)
  .catch((error) => {
    console.log(chalk.red('\nError occurred while fetching Content Types:'))
    console.error(error)
  })
}

// Load all entries for a given Content Type from Contentful
function fetchEntriesForContentType (contentType) {
  return client.getEntries({
      content_type: contentType,
      limit: 100,
      order: '-fields.datetime'
    })
  .then((response) => response.items)
  .catch((error) => {
    console.log(chalk.red(`\nError occurred while fetching Entries for ${chalk.cyan(contentType)}:`))
    console.error(error)
  })
}

// Load one specific entry
function fetchEntry (query) {
  return client.getEntries({
    content_type: query.content_type || 'event',
    'fields.slug': query.slug,
    // 'fields.datetime': query.date,
    limit: 1,
    order: '-fields.datetime'
  })
    .then((entry) => entry.items[0])
    .catch(console.error)
}

function fetchLandingPages() {
  return client.getEntries({
    content_type: 'landingpage',
    limit: 100
  })
      .then((response) => response.items)
      .catch((error) => {
        console.log(chalk.red(`\nError occurred while fetching entries for landing pages:`));
        console.error(error)
      })
}

function fetchLandingPage(query) {
  return client.getEntries({
    content_type: 'landingpage',
    'fields.slug': query.slug,
    limit: 1
  })
      .then((response) => response.items[0])
      .catch((error) => {
        console.log(chalk.red(`\nError occurred while fetching an entry for a landing page:`));
        console.error(error)
      })
}

// Load all entries for a given Content Type from Contentful
function fetchStories () {
  return client.getEntries({
      content_type: 'story',
      limit: 100,
      order: '-fields.publishDate'
    })
  .then((response) => response.items)
  .catch((error) => {
    console.log(chalk.red(`\nError occurred while fetching Entries for story:`));
    console.error(error)
  })
}

// Load one specific story
function fetchStory (query) {
  return client.getEntries({
    content_type: query.content_type || 'story',
    'fields.slug': query.slug,
    limit: 1
  })
    .then((entry) => entry.items[0])
    .catch(console.error)
}

module.exports = {
  fetchEntriesForContentType,
  fetchEntry,
  fetchStories,
  fetchStory,
  fetchLandingPages,
  fetchLandingPage
};
