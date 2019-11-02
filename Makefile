default: test

build:
	npm i

install: build

test:
	node_modules/.bin/mocha

.PHONY: default prepare test