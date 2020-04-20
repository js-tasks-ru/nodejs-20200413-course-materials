const {encode} = require("./caesar");
const {Transform} = require('stream');

// const t = new Transform({
//   transform(chunk, encoding, callback) {
//   }
// })

class CaesarCipherEncode extends Transform {
  // private shift: number;
  #shift = 0;


  constructor(shift) {
    super();
    this.#shift = shift
  }

  /**
   *
   * @param chunk
   * @param encoding 'buffer'|'utf-8'|...
   * @param callback
   * @private
   */
  // _transform(chunk, encoding, callback) {
  //   callback(null, encode(this.#shift, chunk.toString()))
  // }

  _transform(chunk, encoding, callback) {
    this.push(encode(this.#shift, chunk.toString()));
    callback()
  }
}

module.exports = {
  CaesarCipherEncode
};
