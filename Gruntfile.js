module.exports = function(grunt) {

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./",
                    mainConfigFile: "js/main.js",
                    name: "js/main",
                    out: "js/build.js"
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
            css: {
                files: '**/*.less',
                tasks: ['less']
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);

};
