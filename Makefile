UGLIFYJS=./node_modules/.bin/uglifyjs
BROWSERIFY=./node_modules/.bin/browserify


all: dist/torque-reference.js dist/torque-reference.full.js

dist/torque-reference.full.js: dist_folder dist/torque-reference.uncompressed.js
	$(BROWSERIFY) index.js --standalone torquereference > dist/_torque-reference.full.js
	$(UGLIFYJS) dist/_torque-reference.full.js > dist/torque-reference.full.js
	rm -rf dist/_torque-reference.full.js

dist/torque-reference.uncompressed.js: dist_folder $(JS_CLIENT_FILES)
	$(BROWSERIFY) index.js --standalone torquereference >dist/torque-reference.uncompressed.js

dist/torque-reference.js: dist_folder dist/torque-reference.uncompressed.js
	$(UGLIFYJS) dist/torque-reference.uncompressed.js > dist/torque-reference.js

dist_folder:
	mkdir -p dist

dist: dist_folder dist/torque-reference.js

prepare-test-suite:
	browserify test/suite.js > test/suite-bundle.js

clean: 
	rm -rf dist

.PHONY: clean dist_folder