# node-linkedin-scraper2 [![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

A simple LinkedIn profile scraper for nodejs, based on original [linkedin-scraper](https://github.com/aadisriram/nodejs-linkedin-scraper).

## Install [![Dependency Status][david-image]][david-url] [![devDependency Status][david-image-dev]][david-url-dev]
```bash
    npm install linkedin-scraper2 --save
```

### Usage

#### with callback function
```javascript
// Scrape a linkedin profile for the public contents
var linkedinScraper = require('linkedin-scraper');
var url = 'https://www.linkedin.com/in/[user]';

linkedinScraper(url, function(err, profile) {
    if (err) {
        console.log(err);
    } else {
        console.log(profile);
    }
});
```

#### with promise
```javascript
// Scrape a linkedin profile for the public contents
var linkedinScraper = require('linkedin-scraper');
var url = 'https://www.linkedin.com/in/[user]';

linkedinScraper(url)
    .then(function(profile) {
        console.log(profile);
    })
    .catch(function(err) {
        console.log(err);
    });
```

#### output

http://pastebin.com/629RHwTa

[npm-url]: https://npmjs.org/package/linkedin-scraper2
[npm-image]: http://img.shields.io/npm/v/linkedin-scraper2.svg

[travis-url]: https://travis-ci.org/danieljoppi/node-linkedin-scraper2
[travis-image]: https://img.shields.io/travis/danieljoppi/node-linkedin-scraper2.svg

[coveralls-url]: https://coveralls.io/r/danieljoppi/node-linkedin-scraper2
[coveralls-image]: http://img.shields.io/coveralls/danieljoppi/node-linkedin-scraper2/master.svg

[david-url]: https://david-dm.org/danieljoppi/node-linkedin-scraper2
[david-image]: https://david-dm.org/danieljoppi/node-linkedin-scraper2.svg

[david-url-dev]: https://david-dm.org/danieljoppi/node-linkedin-scraper2#info=devDependencies
[david-image-dev]: https://david-dm.org/danieljoppi/node-linkedin-scraper2/dev-status.svg