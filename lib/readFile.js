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

  bitmapObject.paletteOneB = bitmap.readUInt8(54);
  bitmapObject.paletteOneG = bitmap.readUInt8(55);
  bitmapObject.paletteOneR = bitmap.readUInt8(56);
  bitmapObject.paletteOneA = bitmap.readUInt8(57);
  
  console.log(bitmapObject);

}

module.exports = displayBMPProps;
