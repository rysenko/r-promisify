require('es6-promise').polyfill();
var promisify = function(original) {
    if (typeof original === 'object') {
        for (var key in original) {
            var value = original[key];
            if (typeof value === 'function') {
                original[key + 'Async'] = promisify(original[key]);
            }
        }
        return;
    };
    return function() {
        var args = [].slice.call(arguments);
        var context = this;
        return new Promise(function(resolve, reject) {
            args.push(function(err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
            original.apply(context, args);
        });
    };
};
module.exports = promisify;