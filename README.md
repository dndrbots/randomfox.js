# randomfox.js
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