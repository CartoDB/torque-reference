var path = require('path');

module.exports.version = {};

var versionNums = [
	'1.0.0'
];

versionNums.map(function(version){
	module.exports.version[version] = require(path.join(__dirname, version, 'reference.json'));
});