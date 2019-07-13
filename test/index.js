const easyRandom = require('../index');
const Lab = require('@hapi/lab');
const code = require('@hapi/code');

const lab = exports.lab = Lab.script();
const expect = code.expect;
const it = lab.it;
const describe = lab.describe;

describe('Easy random', () => {

  describe('GetPercent', () => {

    it('Should return a number between 0 and 100', () => {
      const percents = [];
      for (let i = 0; i < 100; i++) {
        percents.push(easyRandom.getPercent());
      }

      percents.forEach(percent => {
        expect(percent).to.be.within(0, 100);
      });
    });

  });

  describe('GetMax', () => {

    it('Should return a number no larger than 1', () => {
      const result = easyRandom.getMax(1);
      expect(result).to.below(1);
    });

    it('Should return number no larger than 3', () => {
      const result = easyRandom.getMax(3);
      expect(result).to.below(4);
    });

    it('Should return 0 for bad input', () => {
      const result = easyRandom.getMax('potato');
      expect(result).to.equal(0);
    });

    it('Should parse strings', () => {
      const result = easyRandom.getMax('1');
      expect(result).to.be.below(2);
    });

    it('Should return 0 if max is 0', () => {
      const result = easyRandom.getMax(0);
      expect(result).to.equal(0);
    });

  });

  describe('GetBetween', () => {

    it('Should return a number between 2 and 4 inclusive', () => {
      const result = easyRandom.getBetween(2, 4);
      expect(result).to.be.between(1, 5);
    });

    it('Should return min if min and max are equal', () => {
      const result = easyRandom.getBetween(2, 2);
      expect(result).to.equal(2);
    });

    it('Should allow negative numbers', () => {
      const result = easyRandom.getBetween(-2, -4);
      expect(result).to.be.between(-5, -1);
    });

    it('Should parse numbers', () => {
      const result = easyRandom.getBetween('1', '4');
      expect(result).to.be.between(0, 5);
    });

    it('Should return 0 for unparseable min', () => {
      const result = easyRandom.getBetween('bum', '4');
      expect(result).to.equal(0);
    });

    it('Should return 0 for unparseable max', () => {
      const result = easyRandom.getBetween('1', 'bum');
      expect(result).to.equal(0);
    });

  });

  describe('FlipCoin', () => {

    it('Should return true or false', () => {
      const result = easyRandom.flipACoin();
      expect(result).to.be.a.boolean();
    });

  });

});
