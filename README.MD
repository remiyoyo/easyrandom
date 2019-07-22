# EasyRandom
[![Build Status](https://travis-ci.org/ctrlaltcookie/easyrandom.svg?branch=master)](https://travis-ci.org/ctrlaltcookie/easyrandom)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Easy random is a bunch of simple random functions that I've gotten sick of rewriting in basically every npm package. No one likes dependencies so this doesn't have any. Well okay there are 3 dev dependencies for testing, but you don't have to install those in production, lucky you.

## Install

Readme's always have installation instructions so why would this one be any different.

```bash
$ npm install @remibutler/easyrandom
```

If you want to use this in production, and you should because it's better than your package, use the --production arg so you wont get any dev-dependencies installed.

```bash
$ npm ci @remibutler/easyrandom --production
```

## Testing

Testing is done with:

* [@hapi/lab](https://github.com/hapijs/lab) as the test runner and linter
* [@hapi/code](https://github.com/hapijs/code) as the expectation library

This is simply because they're both very easy to use and hyper obvious, also they're basically mocha and chai, wait why don't we just use mo-

```bash
$ npm ci
$ npm test
```

## Usage

```javascript
const easyRandom = require('@remibutler/easyrandom');
const coin = easyRandom.flipACoin();
```

Full list of functions and their expected returns, there are jsdocs but you might wanna use runkit on npmjs so... here ya go!

### .flipACoin()

Returns true or false randomly

```javascript
easyRandom.flipACoin() // true or false
```

### .getBetween(min, max)

Returns a psuedorandom positive whole number between a minium and maximum inclusive, parses input and shortcuts if the inputs are equal or the maximum is 0. If ether input is not parseable it will return 0.

```javascript
easyRandom.getBetween(1, 6) // returns a whole number from 1 to 6
```

### .getPercent()

Returns a pseudorandom whole number between 0 and 100 inclusive

```javascript
easyRandom.getPercent() // returns a whole number from 0 to 100
```

### .getMax(max)

Returns a psuedorandom whole number between 0 and your maximum inclusive, it parses input and shortcuts if the input is 0, it will happily explode if you pass a number that's too big. If input is not parseable it will return 0.

```javascript
easyRandom.getMax(200) // returns a whole number from 0 to 200
```

### .getString(length (optional))

Returns a pseudorandom alphanumeric string of optional length, default length is 7. Returns empty string for 0 length.

```javascript
easyRandom.getString(20) // returns a random alphanumeric string of 20 characters
```

### .getStringNonNumeric(length (optional))

Returns a pseudorandom alpha string of optional length, default length is 7. Returns empty string for 0 length.

```javascript
easyRandom.getStringNonNumeric(20) // returns a random alpha string of 20 characters
```

### .getStringWithCustomCharacterSet(length (optional), characterset (optional))

Returns a string inside a custom character set of optional length, defaults to alphanumeric and length of 7. Returns empty string for 0 length.

```javascript
easyRandom.getStringWithCustomCharacterSet(20, 'YOURFACE') // returns a random string from characterset provided of 20 characters
```

## Todo

This is functionality i need to ~~shamelessly steal~~ add.

### .getDate()

Returns a pseudorandom date.

### .getDateBetween(minimum, maximum)

Returns a date between two dates, accepts two date objects, returns today if minimum is larger than maximum or if either isn't a date.
