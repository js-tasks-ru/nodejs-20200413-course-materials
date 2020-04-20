const {createGzip} = require('zlib');
const {createReadStream, createWriteStream} = require('fs');
const path = require('path');
const {CaesarCipherEncode} = require("./cipher/caesar-stream");

const FILE_NAME = path.resolve(process.cwd(), './data/3-law.txt');

const readStream = createReadStream(FILE_NAME);
const writeStream = createWriteStream(`${FILE_NAME}.encoded`);

const encoder = new CaesarCipherEncode(1);

const zip = createGzip()

readStream   // readable
  .pipe(encoder)// transform
  // .pipe(zip)  // transform
  // .pipe(duplex)
  .pipe(writeStream); // writable

readStream.on("data", (chunk) => {
  encoder.write(chunk)
})

readStream.once('close', () => {
  console.log("Stream closed");
});


