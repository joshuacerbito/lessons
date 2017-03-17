default:
	make clean
	mkdir dist dist/js dist/css
	make bundle

bundle:
	cat css/colors.css css/fonts.css > dist/css/bundle.css
	cat js/add.js js/multiply.js js/reduce.js js/sum.js js/quotient.js js/main.js > dist/js/bundle.js

clean:
	rm -rf dist
