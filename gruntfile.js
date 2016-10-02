module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['src/js/*.js'],
                // the location of the resulting JS file
                dest: 'build/js/main.js'
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            files: {
                'build/css/main.css': 'src/scss/main.scss'       // 'destination': 'source'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'concat']);
    grunt.registerTask('sass', ['sass']);

};