var lodash = require('lodash');

var verbs = [
    'run',
    'jump',
    'code',
    'dance',
    'rule',
    'dominate'

];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(verbs);
};