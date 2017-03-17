default:
	make clean
	mkdir dist dist/js dist/css
	make bundle

bundle:
	cat css/colors.css css/fonts.css > dist/css/bundle.css
	cat js/*.js > dist/js/bundle.js

clean:
	rm -rf dist
