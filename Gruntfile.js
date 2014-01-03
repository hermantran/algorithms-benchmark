module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*.spec.js',
        helpers: 'spec/*Helper.js'
      }
    },
    
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ]
    },
    
    watch: {
      js: { 
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('travis', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['travis']);
};