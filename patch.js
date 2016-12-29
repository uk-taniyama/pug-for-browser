const fs = require('fs');
const pugDir = 'node_modules/pug/';
const pugPackageJson = pugDir + 'package.json';
const moduleName = 'pug-filters';
const browserJs = 'browser-' + moduleName + '.js';
const json = JSON.parse(fs.readFileSync(pugPackageJson));
console.log("patch:" + pugPackageJson);
json.browser[moduleName] = './' + browserJs;
fs.writeFileSync(pugPackageJson,JSON.stringify(json,null,2));
console.log("copy:" + browserJs);
fs.writeFileSync(pugDir + browserJs,fs.readFileSync(browserJs));
console.log("END!!");

