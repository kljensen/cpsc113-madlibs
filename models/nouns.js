var lodash = require('lodash');

var nouns = [
    'man',
    'bear',
    'pig',
    'kaity',
    'kyle',
    'daniel',
    'alfred spektor'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(nouns);
};