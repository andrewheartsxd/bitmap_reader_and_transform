'use strict'

var displayBMPProps = function(bitmap) {

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
  // bitmapObject.paletteOneB = bitmap.readUInt32LE(62);
  // bitmapObject.paletteOneA = bitmap.readUInt32LE(66);

  console.log(bitmapObject);

}

module.exports = displayBMPProps;
