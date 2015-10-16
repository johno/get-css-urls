# get-css-urls [![Build Status](https://travis-ci.org/johnotander/get-css-urls.svg?branch=master)](https://travis-ci.org/johnotander/get-css-urls) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get CSS urls, `url(foo.css)`, contained within a string.

## Installation

```
npm i --save get-css-urls
```

## Usage

```js
var getCssUrls = require('get-css-urls')

getCssUrls('url(foo.css); lksjhlksjhdf url(bar.css);')
// => ['url(foo.css)', 'url(bar.css)']

getCssUrls('(foo.css); lksjhlksjhdf')
// => []
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
