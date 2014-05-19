module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
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
        src: [
          'src/partials/header.js', 
          'src/algorithms/*.js', 
          'src/partials/benchmarking.js', 
          'src/partials/footer.js'
        ],
        dest: 'src/algorithms.js'
      },
      debug: {
        src: [
          'src/partials/header.js', 
          'src/algorithms/*.js', 
          'src/partials/benchmarking.js', 
          'src/partials/debug.js', 
          'src/partials/footer.js'
        ],
        dest: 'src/algorithms.debug.js'
      },
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'  
      },
      dist: {
        files: {
          'dist/algorithms.min.js': ['src/algorithms.js']  
        }
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('travis', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['concat', 'travis', 'uglify']);
};