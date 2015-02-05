var lodash = require('lodash');

var adjectives = [
    'short',
    'crafty',
    'wiley',
    'stupid',
    'blue'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(adjectives);
};