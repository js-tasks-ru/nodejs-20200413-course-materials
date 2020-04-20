const {createReadStream, createWriteStream} = require('fs');
const path = require('path');
const {Writable} = require('stream')

const FILE_NAME = path.resolve(process.cwd(), './data/3-law11111111111111111111.txt');

const readStream = createReadStream(FILE_NAME);
const writeStream = createWriteStream(`${FILE_NAME}.bak`, {flags: 'wx'});

/* pipe method */
readStream.pipe(writeStream)
  .on('error', err => {
    console.log(`Write error ${err.code}, ${err.message}`);
  });
//
readStream.on('error', err => {
  console.log(`Read error ${err.code}, ${err.message}`);
});

readStream.once('close', () => {
  console.log('Readable stream closed');
});

writeStream.once('close', () => {
  console.log('Writable stream closed');
})


