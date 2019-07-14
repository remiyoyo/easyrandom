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
      expect(result).to.below(2);
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

    it('Should return a number between 4 and 14 inclusive', () => {
      const results = [];
      for (let i = 0; i < 100; i++) {
        results.push(easyRandom.getBetween(4, 14));
      }

      results.forEach(result => {
        expect(result).to.be.within(4, 14);
      });
    });

    it('Should return min if min and max are equal', () => {
      const result = easyRandom.getBetween(2, 2);
      expect(result).to.equal(2);
    });

    it('Should parse numbers', () => {
      const result = easyRandom.getBetween('1', '4');
      expect(result).to.be.within(1, 4);
    });

    it('Should return 0 for unparseable min', () => {
      const result = easyRandom.getBetween('bum', '4');
      expect(result).to.equal(0);
    });

    it('Should return 0 for unparseable max', () => {
      const result = easyRandom.getBetween('1', 'bum');
      expect(result).to.equal(0);
    });

    it('Should return a number between 1 and 6', () => {
      const diceRolls = [];
      for (let i = 0; i < 100; i++) {
        diceRolls.push(easyRandom.getBetween(1,6));
      }

      diceRolls.forEach(roll => {
        expect(roll).to.be.within(1,6);
      });
    });

    it('Should return 0 if min is negative', () => {
      const result = easyRandom.getBetween(-1, 10);
      expect(result).to.equal(0);
    });

    it('Should return 0 if max is negative', () => {
      const result = easyRandom.getBetween(0, -10);
      expect(result).to.equal(0);
    });

    it('Should return 0 if max is < than min', () => {
      const result = easyRandom.getBetween(10, 9);
      expect(result).to.equal(0);
    });

  });

  describe('FlipCoin', () => {

    it('Should return true or false', () => {
      const result = easyRandom.flipACoin();
      expect(result).to.be.a.boolean();
    });

  });

  describe('GetString', () => {

    it('Should return a random string of 7 characters', () => {
      const result = easyRandom.getString();
      expect(result).to.be.a.string();
      expect(result.length).to.equal(7);
    });

    it('Should return a random string of 80 characters', () => {
      const result = easyRandom.getString(80);
      expect(result).to.be.a.string();
      expect(result.length).to.equal(80);
    });

    it('Should return empty string when length is 0', () => {
      const result = easyRandom.getString(0);
      expect(result).to.be.empty();
    });

    it('Should return a string containing alpha numeric characters', () => {
      const result = easyRandom.getString(100);
      expect(result).to.match(/^[a-zA-Z0-9]*$/);
    });

  });

  describe('GetStringNonNumeric', () => {

    it('Should return a random string of 7 characters', () => {
      const result = easyRandom.getStringNonNumeric();
      expect(result).to.be.a.string();
      expect(result.length).to.equal(7);
    });

    it('Should return a random string of 80 characters', () => {
      const result = easyRandom.getStringNonNumeric(80);
      expect(result).to.be.a.string();
      expect(result.length).to.equal(80);
    });

    it('Should return empty string when length is 0', () => {
      const result = easyRandom.getStringNonNumeric(0);
      expect(result).to.be.empty();
    });

    it('Should return a string containing alpha numeric characters', () => {
      const result = easyRandom.getStringNonNumeric(100);
      expect(result).to.match(/^[a-zA-Z]*$/);
    });

  });

  describe('GetStringWithCustomCharacterSet', () => {

    it('Should return a random string of 7 alphanumeric characters', () => {
      const result = easyRandom.getStringWithCustomCharacterSet();
      expect(result).to.be.a.string();
      expect(result.length).to.equal(7);
      expect(result).to.match(/^[a-zA-Z0-9]*$/);
    });

    it('Should return a random string of 80 characters', () => {
      const result = easyRandom.getStringWithCustomCharacterSet(80);
      expect(result).to.be.a.string();
      expect(result.length).to.equal(80);
    });

    it('Should return empty string when length is 0', () => {
      const result = easyRandom.getStringWithCustomCharacterSet(0);
      expect(result).to.be.empty();
    });

    it('Should return a string containing only ABC', () => {
      const result = easyRandom.getStringWithCustomCharacterSet(10, 'ABC');
      expect(result).to.match(/^[A-C]*$/);
      expect(result.length).to.equal(10);
    });

    it('Should return a string containing only A', () => {
      const result = easyRandom.getStringWithCustomCharacterSet(10, 'A');
      expect(result).to.match(/^[A-C]*$/);
      expect(result.length).to.equal(10);
    });

  });

});
