var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .source('./src')
  .destination('./public')
  .metadata({
    staticImages: images(),
    pretty: true // indented jade output
  })
  .use(require('metalsmith-ignore')('**/_*.*'))
  .use(require('metalsmith-jstransformer')())
  .use(require('metalsmith-sense/sass')())

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}

function images () {
  var glob = require('glob')
  return glob.sync('src/images/**/*.{jpg,png}')
    .map((img) => img.replace(/^src/, ''))
}
