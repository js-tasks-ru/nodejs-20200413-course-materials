const {expect} = require('chai');
const {Readable, Writable} = require('stream');

const {CaesarCipherEncode} = require('./002-caesar-stream');

const toString = (cb) => {
  let string = '';
  return new Writable({
    write(chunk, encoding, callback) {
      string += chunk.toString();
      return callback();
    },
    final(callback) {
      cb(string)
    }
  })
};

describe('CaesarCipherEncode', () => {

  it('should create a instance of CaesarCipherEncode', () => {
    expect(new CaesarCipherEncode()).to.be.instanceOf(CaesarCipherEncode);
  });

  it('should encode stream', (done) => {
    // Arrange
    const source = Readable.from(['A', 'B', 'C'])
    const shift = 1;
    const encoder = new CaesarCipherEncode(shift)
    const expected = 'BCD';

    // Act
    source.pipe(encoder).pipe(toString(actual => {
      // Assert

      expect(actual).to.be.equal(expected)
      done();
    }));
  });
});
