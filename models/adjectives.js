var lodash = require('lodash');

var adjectives = [
    'short',
    'crafty',
    'wiley',
    'greasy',
    'old',
    'noisy'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(adjectives);
};