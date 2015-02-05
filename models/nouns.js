var lodash = require('lodash');

var nouns = [
    'man',
    'bear',
    'pig',
    'swag',
    'snowman',
    'dinosaur',
    'bulldog',
    'manbearpig'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(nouns);
};