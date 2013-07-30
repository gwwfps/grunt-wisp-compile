'use strict';

var grunt = require('grunt');
var fs = require('fs');

function readFile(file) {
  return grunt.util.normalizelf(grunt.file.read(file));  
}

function assertFileEquality(test, pathToActual, pathToExpected) {
  var actual = readFile(pathToActual);
  var expected = readFile(pathToExpected);
  test.equal(expected, actual, 'Should compile wisp to JavaScript.');
}

exports.wisp = {
  plain: function(test) {
    test.expect(3);

    assertFileEquality(test, 'tmp/intro.js', 'test/expected/intro.js');
    assertFileEquality(test, 'tmp/hello.js', 'test/expected/hello.js');
    assertFileEquality(test, 'tmp/node.js', 'test/expected/node.js');

    test.done();
  }
};
