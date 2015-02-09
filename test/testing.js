'use strict'

var expect = require('chai').expect;
var displayBMPProps = require('../lib/readFile');
var greyScale = require('../lib/greyScale');


describe('when given a filename through the command line', function() {
  
  before(function() {
    var fs = require('fs');  
    process.argv[2] = 'test.bmp';
    this.oldName = process.argv[2];
    this.bitmap = fs.readFileSync(process.argv[2]);
  });

// Tests if read file is a bitmap
  it('should return "BM"', function() {   
    var result = displayBMPProps(this.bitmap);
    expect(result.type).equal('BM'); 
  });

// Tests if output file is greyscale
  it('should return palette where R value = G value = B value', function() {
    var paletteCompare = Math.floor(Math.random()*256)
    var result = greyScale(this.bitmap, this.oldName);
    expect(result[paletteCompare]['R']).equal(result[paletteCompare]['B']);
    expect(result[paletteCompare]['B']).equal(result[paletteCompare]['G']);
  });

});


