module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    jasmine: {
      src: 'src/algorithms.js',
      options: {
        specs: 'spec/**/*.spec.js',
        helpers: 'spec/*Helper.js'
      }
    },
    
    jshint: {
      all: [
        'Gruntfile.js',
        'src/*.js',
        'spec/**/*.js'
      ]
    },
    
    concat: {
      options: {
        separator: '\n\n'
      },
      js: {
        src: ['src/partials/before.js', 'src/algorithms/*.js', 'src/partials/after.js'],
        dest: 'src/algorithms.js'
      }
    },
    
    watch: {
      js: { 
        files: ['<%= jshint.all %>', 'src/**/*.js'],
        tasks: ['concat', 'jshint']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('travis', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['travis']);
};