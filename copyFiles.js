'use strict';

const fs = require('fs');

fs.createReadStream('./src/index.css').pipe(fs.createWriteStream('./docs/node_modules/react-ionicons/lib/index.css'));
fs.createReadStream('./lib/index.js').pipe(fs.createWriteStream('./docs/node_modules/react-ionicons/lib/index.js'));
