# [bcds.design](http://bcds.design)

### Development setup

Install [Node.js](https://nodejs.org/) (at least v4.0), and then:

```
npm install
```

Then:

```
npm start
```

### Deployment

**Just update the `master` branch;** Travis will automatically deploy it to
GitHub pages.  Otherwise, run `npm run build` and publish the `public/` files
somewhere.
