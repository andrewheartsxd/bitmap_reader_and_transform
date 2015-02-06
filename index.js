'use strict'

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');
console.log(bitmap);

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readUInt32LE(2);
bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
bitmapObject.headerSize = bitmap.readUInt32LE(14);
bitmapObject.width = bitmap.readUInt32LE(18);
bitmapObject.height = bitmap.readUInt32LE(22);
bitmapObject.colorDepth = bitmap.readUInt16LE(28);
bitmapObject.paletteSize = bitmap.readUInt32LE(46);



bitmap[54] = 0;
bitmap[55] = 100;
bitmap[56] = 240;
bitmap[57] = 255;

console.log(bitmap[54]);

// for (var i = 54; i < 1078; i++) {
// 	bitmap[i] = (Math.random() * 255);
// };

// for (var i = 1078; i < 11078; i++) {
// 	bitmap[i] = (Math.random() * 255);
// };

console.dir(bitmapObject);

fs.writeFile('test2.bmp', bitmap, function(err, success) {
  if (err) throw err;
  console.log('Success!');
});



