'use strict';

var expect = require('chai').expect;
var displayBMPProps = require('../lib/readFile');
var greyScale = require('../lib/greyScale');


describe('when given a filename through the command line', function() {
  
  before(function() {
    var fs = require('fs');  
    process.argv[2] = 'test.bmp';
    this.oldName = process.argv[2];
    // to "read" from the command line, uncomment the following code:
    // this.bitmap = fs.readFileSync(process.argv[2]);

    function bitmapCreator() {
      
      var headerStart = 54;
      var newBitMap = new Buffer(11078);

      newBitMap.write('BM', 0, 2);
      for(var i = 0; i < 1024; i++) {
        newBitMap[54+i] = Math.floor(Math.random()*256); 
      }

      return newBitMap;
    }

    this.newBitMap = bitmapCreator();

  });

// Tests if read file is a bitmap
  it('should return "BM"', function() {
    // if reading from command line, substitute this.bitmap for this.newBitMap below: 
    var result = displayBMPProps(this.newBitMap);
    expect(result.type).equal('BM'); 
  });

// Tests if output file is greyscale
  it('should return palette where R value = G value = B value', function() {
    var paletteCompare = Math.floor(Math.random()*256);
    // if reading from command line, substitute this.bitmap for this.newBitMap below:
    var result = greyScale(this.newBitMap, this.oldName);
    expect(result[paletteCompare].R).equal(result[paletteCompare].B);
    expect(result[paletteCompare].B).equal(result[paletteCompare].G);
  });

});


