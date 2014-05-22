module.exports = function(grunt) {

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./js",
                    mainConfigFile: "js/main.js",
                    name: "main",
                    out: "build/js/main.js"
                }
            }
        },
        less: {
            development: {
                files: {
                    "build/css/main.css": "css/less/*"
                }
            }
        },
        watch: {
            less: {
                files: '**/*.less',
                tasks: ['less']
            },
            livereload: {
                options: { livereload: true },
                files: ['build/**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'requirejs']);

};
