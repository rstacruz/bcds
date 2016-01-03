# [bcds.design](http://bcds.design)

The website in [bcds.design](http://bcds.design).

[![Status](https://travis-ci.org/rstacruz/bcds.svg?branch=master)](https://travis-ci.org/rstacruz/bcds "See test builds")

## Development setup

Install [Node.js](https://nodejs.org/) (at least v4.0), and then:

```
npm install
```

Then:

```
npm start
```

## Deployment

**Just update the `master` branch;** Travis will automatically deploy it to
GitHub pages.  Otherwise, run `npm run build` and publish the `public/` files
somewhere.

## How it's made

Built using Metalsmith. Required reading:

- [Metalsmith](http://metalsmith.io/) static site generator
- [Jade](http://jade-lang.com/) HTML templating
- [Sass](http://sass-lang.com/) stylesheets

## Thanks

**bcds** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/bcds/contributors
