# game-of-thrones-names

[![travis build](https://img.shields.io/travis/wolfgangbecker/game-of-thrones-names.svg?style=flat-square)](https://travis-ci.org/wolfgangbecker/game-of-thrones-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/wolfgangbecker/game-of-thrones-names.svg?style=flat-square)](https://codecov.io/github/wolfgangbecker/game-of-thrones-names)
[![version](https://img.shields.io/npm/v/game-of-thrones-names.svg?style=flat-square)](http://npm.im/game-of-thrones-names)
[![downloads](https://img.shields.io/npm/dm/game-of-thrones-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=game-of-thrones-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/game-of-thrones-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Game of Thrones characters.

<a href="https://app.codesponsor.io/link/PKGFLnhDiFvsUA5P4kAXfiPs/wolfgangbecker/game-of-thrones-names" rel="nofollow"><img src="https://app.codesponsor.io/embed/PKGFLnhDiFvsUA5P4kAXfiPs/wolfgangbecker/game-of-thrones-names.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

![game-of-thrones-names](other/game-of-thrones-names.gif)

## Installation

This package is distributed via npm:

```
npm install game-of-thrones-names
```

## Usage

```javascript
var names = require('game-of-thrones-names');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

## Other

This library was developed by [me](https://twitter.com/wolfgangbecker) as part of an
[egghead.io](http://egghead.io/) series called "How to Write a JavaScript Library."

I'm now also using it to give [a workshop](http://kcd.im/fem-oss) for
[Frontend Masters](https://frontendmasters.com).

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`

If you need help with these steps, you might check out
[this free Egghead.io course](http://kcd.im/pull-request) which can help you get things going.

Finally, based on which version of the project you're looking for (workshop, egghead, or
Frontend Masters) you'll run one of the following commands in the cloned directory:

- **Frontend Masters Workshop**: `npm run setup:fem`
- **Egghead Course**: `npm run setup:egghead`

If you get any failures at this point something is wrong and needs to be fixed. Remember,
[Google](https://google.com) and [StackOverflow](https://stackoverflow.com) are your friends.

You might find it helpful to see a list of the available branches. Run: `git branch` for that.
