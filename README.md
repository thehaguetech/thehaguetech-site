# thehaguetech-site

The website of [The Hague Tech](https://www.thehaguetech.com/).

## Project overview

The website is mostly written in JavaScript.

For frontend development we use [NextJS](https://nextjs.org/), a React framework with native support for Server Side Rendering (SSR).

For backend development we use a simple express server.

## Contributing

Do you have ideas or feedback? Or do you want to contribute to the design, content or code? You are very welcome to contribute!

Examples of contributions you could think of:

- Bug reports
- UI enhancements
- General feedback
- Textual updates
- Improving this README

An easy way to start contributing is by creating a so called 'issue' with your feature request, idea or bug report. [Start here](https://github.com/thehaguetech/thehaguetech-site/issues/new).

## Getting started

### 1. First time use

    git clone git@github.com:bartwr/thehaguetech-site.git
    cd thehaguetech-site
    npm install

### 2. Running the app

1. In `.env`, set Contentful API configuration. It should look something like this:

```
CONTENTFUL_SPACE_ID=YOURID
CONTENTFUL_ACCESS_TOKEN=YOURTOKEN
SENDGRID_API_KEY='SENDGRIDAPIKEY'
MAILCHIMP_ID='XXXX-us15'
```

2. `npm run dev`

Need help? [Create an issue](https://github.com/thehaguetech/thehaguetech-site/issues).

### 3. gitmoji for git commits

Want to make use of [gitmoji](https://gitmoji.carloscuesta.me/)?

> **Using emojis** on **commit messages** provides **an easy way**
> of **identifying the purpose or intention of a commit** with only
> looking at the emojis used.

Do the following:

    npm i -g gitmoji-cli
    gitmoji -i

From now, always git commit from your CLI. In example:

    git add .
    git commit

Hooray! Emoji intentions in front of your commit message.

_Inspired by [OpenBook](https://github.com/OpenbookOrg/openbook-app#git-commit-message-conventions)._

### 4. Deploying the app

Heroku?

- In settings tab, set config vars:
  - CONTENTFUL_ACCESS_TOKEN
  - CONTENTFUL_SPACE_ID
  - SENDGRID_API_KEY

Netlify?

- Build command: `npm run deploy`
- Publish directory: `out`

Running production on Windows?

    SET CONTENTFUL_ACCESS_TOKEN=token
    SET CONTENTFUL_SPACE_ID=id
    SET SENDGRID_API_KEY=apikey
    SET NODE_ENV=production
    node api/server.js

Running production on Linux?

    export CONTENTFUL_SPACE_ID=orgovvkppcys
    export CONTENTFUL_ACCESS_TOKEN=ACCESS_TOKEN
    export PORT=3000
    export SENDGRID_API_KEY='SENDGRIDAPIKEY'
    export MAILCHIMP_ID='f49378b026862af74390f89fa6b820c0-us15'
    export SENDGRID_API_KEY=apikey
    export NODE_ENV=production
    node api/server.js

## Contributors

- [bartwr](https://github.com/bartwr/) (Code)
- Hans Pols (Graphic Design)
- Peter Hofman (Server Management)
- Charles Weiler-Ulin (Concept, Content)
- Ali (Concept, Content)

## NOTES on Design

- 12px grid horizontally
-  8px grid vertically (1rem - 8px)
