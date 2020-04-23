const sinon = require('sinon');
const {expect} = require("chai");

const retry = require('./004-retry');

describe('retry', () => {

  // after
  // before

  // beforeEach
  afterEach(() => {
    sinon.restore();
  });

  it('should call passed function and return it\'s result if any', async () => {
    const timeout = 0;
    const fn = sinon.stub().returns(4);
    const self = {a: 42};
    const args = [1, 2, 3];

    //Act
    const expected = await retry(timeout, fn, self, ...args);

    expect(expected).to.be.equal(4);
    expect(fn.calledOn(self), 'expect to pass self as this to fn').to.be.true;
    expect(fn.calledWith(...args)).to.be.true;
    expect(fn.calledOnce).to.be.true;
  });

  it('should call passed function second time if error has been returned after the first call', async () => {
    const timeout = 0;
    const fn = sinon.stub()
      .onFirstCall().throws(new Error())
      .onSecondCall().returns(4);
    const self = {a: 42};
    const args = [1, 2, 3];

    //Act
    const expected = await retry(timeout, fn, self, ...args);

    expect(expected).to.be.equal(4);
    expect(fn).to.have.been.calledTwice;
  });

  it('should call the function second time after specified amount of time', async () => {
    const timeout = 30000;
    const fn = sinon.stub()
      .onFirstCall().throws(new Error())
      .onSecondCall().returns(4);
    const self = {a: 42};
    const args = [1, 2, 3];

    const clock = sinon.useFakeTimers();

    const promise = retry(timeout, fn, self, ...args);

    await Promise.resolve();

    clock.tick(30000);

    const expected = await promise;

    expect(expected).to.be.equal(4);
    expect(fn).to.have.been.calledTwice;
  });

})
;
