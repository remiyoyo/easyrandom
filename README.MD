# EasyRandom
[![Build Status](https://travis-ci.org/ctrlaltcookie/easyrandom.svg?branch=master)](https://travis-ci.org/ctrlaltcookie/easyrandom)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Easy random is a bunch of simple random functions that i've gotten so sick of rewriting over the years, even if other people don't use it, this is useful to me. I'm not chill with importing an insane number of dependencies either, so this has two (ofc with sub dependencies, sigh)

## Testing

Testing is done with hapi/lab as the test runner and hapi/code as the expectation library, simple because they're both very easy to use and hyper obvious.

```bash
$ npm ci
$ npm test
```

## Functions

Full list of functions and their expected returns, however there are jsdocs so this is just here for posterity

### .flipACoin()

Returns true or false randomly

### .getBetween(min, max)

Returns a psuedorandom whole number between a minium and maximum inclusive, parses input and shortcuts if the inputs are equal, allows negative numbers. If ether input is not parseable it will return 0.

### .getPercent()

Returns a pseudorandom whole number between 0 and 100

### .getMax(max)

Returns a psuedorandom whole number between 0 and your maximum inclusive, it parses input and shortcuts if the input is 0, it will happily explode if you pass a number that's too big. If input is not parseable it will return 0.
