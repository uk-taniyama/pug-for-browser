# pug-for-browser

How to create [pugjs.org](https://pugjs.org/) in browser.
Pug is not found in cdn.

Let's build by browserify!!

But......Some error occurred. 

```
Uncaught TypeError: Cannot read property 'split' of undefined
```

This error at.

```
// required sequence : pug->pug-filters->./lib/run-filter->resolve->./lib/core
var current = process.versions.node.split('.');
```

Let's not use pug-filters!
**BUT** I dont know what will happen......

# Usage

Do as follows.

```
npm install
npm run patch
npm run build
```

Then you can get 'pug.js' and check the result by opening sample.html in the browser.
