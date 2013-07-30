/*
 * grunt-wisp-compile
 * https://github.com/gwwfps/grunt-wisp-compile
 *
 * Copyright (c) 2013 David Zhang
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  'use strict';

  var path = require('path');
  var _ = grunt.util._;

  grunt.registerMultiTask('wisp', 'Compile wisp file(s).', function() {
    this.files.forEach(processFileGroup);
  });

  var processFileGroup = function(fileGroup) {
    var files = fileGroup.src.filter(function(file) {
      if (grunt.file.exists(file)) {
        return true;
      } else {
        grunt.log.warn('Cannot find file: ' + file);
        return false;
      }            
    });
        
    var output = files.map(compile).join(grunt.util.linefeed);
    writeFile(fileGroup.dest, output);
  };

  var writeFile = function (path, output) {    
    if (output.length < 1) {
      grunt.log.warn('Destination (' + path + ') not written because compiled files were empty.');
    } else {      
      grunt.file.write(path, output);
      grunt.log.writeln('File ' + path + ' created.');
    }
  };

  var compile = function(src) {
    var compiler = require('wisp/compiler');

    var code = grunt.file.read(src);
    var output = compiler.compile(code);

    if (_.isUndefined(output.code)) {            
      grunt.log.error('Error trying to compile file ' + src);
      if (output.error) {
        grunt.log.error(output.error);
      }

      grunt.fail.warn('Failed to compile wisp.');
    }

    return output.code;
  };

};
