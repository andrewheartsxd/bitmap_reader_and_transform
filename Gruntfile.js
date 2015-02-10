'use strict';

module.exports = function(grunt) {
  
  grunt.initConfig ({

    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc',
        },
        src: ['Gruntfile.js', 'index.js', 'lib/*.js', 'test/*.js'] 
      }  
    },

    simplemocha: {
      all: {
        src: ['test/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          config: ".jscsrc", 
        },
        files: {
          src: ['Gruntfile.js', 'index.js', 'lib/greyScale.js', 'lib/readFile.js', 'test/testing.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);
  grunt.registerTask('default', ['test']);

};