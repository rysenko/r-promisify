Promise wrapper for errbacks

# Installation

    $ npm install r-promisify

# Usage

    var promisfiy = require('r-promisify');
    var existsAsync = promisify(require('fs').exists);
    existsAsync('path').then(...)
    
Or alternatively:

    require('r-promisify');
    var existsAsync = require('fs').exists.promise();