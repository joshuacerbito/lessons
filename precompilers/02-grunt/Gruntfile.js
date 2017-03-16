module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['js/add.js', 'js/multiply.js', 'js/reduce.js', 'js/sum.js', 'js/quotient.js', 'js/main.js'],
        dest: 'dist/js/bundle.min.js',
      }
    },
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/css/bundle.min.css': 'css/main.scss'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/bundle.min.js': ['dist/js/bundle.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'sass', 'uglify']);
};
