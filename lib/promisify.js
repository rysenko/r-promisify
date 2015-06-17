require('es6-promise').polyfill();
var promisify = function(original) {
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
Function.prototype.promise = function() {
    return promisify(this);
};
module.exports = promisify;