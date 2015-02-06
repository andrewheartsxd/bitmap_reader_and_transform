'use strict'

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readUInt32LE(2);
bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
bitmapObject.headerSize = bitmap.readUInt32LE(14);
bitmapObject.width = bitmap.readUInt32LE(18);
bitmapObject.height = bitmap.readUInt32LE(22);
bitmapObject.colorDepth = bitmap.readUInt16LE(28);
bitmapObject.paletteSize = bitmap.readUInt32LE(46);

bitmapObject.paletteOneB = bitmap[54];
bitmapObject.paletteOneG = bitmap[55];
bitmapObject.paletteOneR = bitmap[56];
bitmapObject.paletteOneA = bitmap[57];
//bitmapObject.paletteOneB = bitmap.readUInt32LE(62);
//bitmapObject.paletteOneA = bitmap.readUInt32LE(66);

for(var i = 0; i < 1023; i++) {
  bitmap[54+i] = Math.floor(Math.random()*256);
}

for(var i = 0; i < 10000 ; i++) {
  bitmap[1078+i] = Math.floor(Math.random()*256);
}




console.dir(bitmapObject);

fs.writeFile('test2.bmp', bitmap, function(err, success) {
  if (err) throw err;
  console.log('Success!');
});



