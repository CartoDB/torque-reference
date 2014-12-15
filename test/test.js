var assert = require('assert');
var references = require('../');
var glob = require('glob');
var path = require('path');

describe('versions', function() {
    it('show report all versions', function() {
        var versions = glob.sync("./*.*.*");
        var versions2 = Object.keys(references.version);
        versions = versions.map(function(e) { return path.basename(e) })
        assert.deepEqual(versions,versions2);
    });
});

describe('styles', function() {
    for (var key in references.version) {
        (function(key) {
            it('show report correct version for '+key, function() {
                assert.equal(references.version[key].version,key);
            });
        })(key)
    }

    // it('show reveal new property in Mapnik 2.3.0', function() {
    //     assert.ok(references.version['2.3.0'].symbolizers.markers['geometry-transform']);
    //     assert.ok(!references.version['2.0.0'].symbolizers.markers['geometry-transform']);
    // });
    
	it('colors are in the right format', function(){
		var versions = Object.keys(references.version);
		versions.forEach(function(number){
			var colors = references.version[number].colors;
			Object.keys(colors).forEach(function(color){
				assert(colors[color].length <= 4);
			});
		});
	});
});