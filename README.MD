# EasyRandom

Easy random is a bunch of simple random functions that i've gotten so sick of rewriting over the years, even if other people don't use it, this is useful to me. I'm not chill with important an insane number of dependencies either so this has two (ofc with sub dependencies sigh)

## Testing

Testing is done with hapi/lab as the test runner and hapi/code as the expectation library, simple because they're both very easy to use and hyper obvious.

```bash
$ npm ci
$ npm test
```

## Functions

Full list of functions and their expected returns, however there are jsdocs so this is just here for posterity

### flipACoin

Returns true or false randomly

### getBetween

Returns a random number between a minium and maximum you specify, parses input and shortcuts if the input are equal, allows negative numbers

### getPercent

Returns a number between 0 and 100

### getMax

Returns a number between 0 and your maximum, it parses input and shortcuts if the input is 0, it will happily explode if you pass a number that's too big