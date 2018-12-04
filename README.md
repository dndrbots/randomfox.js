# randomfox.js
[![Build Status](https://api.travis-ci.org/dndrhead/randomfox.js.svg?branch=master)](https://travis-ci.org/dndrhead/randomfox.js)
[![Coverage Status](https://coveralls.io/repos/github/dndrhead/randomfox.js/badge.svg?branch=master)](https://coveralls.io/github/dndrhead/randomfox.js?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/dndrhead/randomfox.js.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/dndrhead/randomfox.js.svg)](https://david-dm.org/dndrhead/randomfox.js)
[![devDependency Status](https://david-dm.org/dndrhead/randomfox.js/dev-status.svg)](https://david-dm.org/dndrhead/randomfox.js#info=devDependencies)

A simple npm module to get some fluffy foxes
# Installation
>npm i randomfox.js --save
# Usage
```javascript
const { getFox } = require('randomfox.js');

async function main() {
    await getFox();
    /* returns
    { image: 'http://randomfox.ca/images/47.jpg',
      link: 'http://randomfox.ca/?i=47' }
    */
}

main();
```

Very useful module xD