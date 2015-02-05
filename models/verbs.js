var lodash = require('lodash');

var verbs = [
    'run',
    'jump',
    'code',
    'swag',
    'swim',
    'crouch',
    'spend',
    'strut'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(verbs);
};