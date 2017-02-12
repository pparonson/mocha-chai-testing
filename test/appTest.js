const chai = require('chai');

const app = require('../app.js');

const assert = chai.assert;
const expect = chai.expect;
const isEven = app.isEven;

describe('Array', () => {
  it('should start empty', () => {
    const arr = [];

    assert.equal(arr.length, 0);
  });
});

describe('Compare Numbers', () => {
  it('should equal 1', () => {
    expect(1).to.equal(1);
  });
});

describe('Is even tests', () => {
  it('should return a boolean', () => {
    expect(isEven(2)).to.be.a('boolean');
  });
  it('should return true when calling isEven(76)', () => {
    expect(isEven(76)).to.be.true;
  });
  it('should return true when calling isEven(77)', () => {
    expect(isEven(77)).to.be.false;
  });
});
