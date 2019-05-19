# thehaguetech-site

## First time use

    git clone git@github.com:bartwr/thehaguetech-site.git
    cd thehaguetech-site
    npm install

## Running the app

    npm run dev 

## gitmoji

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

## Contributors

- [bartwr](https://github.com/bartwr/) (Code)
- Hans (Graphic Design)

## Configuring Netlify

- Create a new site at Netlify
- As build command, use `npm run deploy`
- As publish directory, use `out`

That's it.

## NOTES on Design

- 12px grid horizontally
-  8px grid vertically
