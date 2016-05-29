'use strict';

module.exports = function(grunt) {

	// load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		bower_concat: {
		  all: {
		    dest: {
		      'js': 'build/js/bower_components.js'
		    },
		    bowerOptions: {
		      relative: false
		    }
		  }
		},
		uglify: {
			my_target: {
				files: {
					'dist/js/scripts.min.js': ['build/js/bower_components.js', 'build/js/app.js']
				}
			}
		},
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    sourceMapFilename: 'style.min.css.map', // otherwise, shit happens
                    compress: true,
                    sourceMap: true
                },
                files: {
                    // compilation.css  :  source.less
                    'dist/css/style.min.css': 'build/less/style.less'
                }
            },
        },
		watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            less: {
            	files: ['build/less/*.less'],
            	tasks: ['less'],
				options: {
					// Start a live reload server on the default port 35729
					livereload: true,
				}
            },
            scripts: {
            	files: ['build/js/*.js'],
				options: {
					// Start a live reload server on the default port 35729
					livereload: true,
				}
            },
			livereload: {
				// Here we watch the files the sass task will compile to
				// These files are sent to the live reload server after sass compiles to them
				options: { livereload: true },
				files: ['index.html'],
			},
        },
	});

  	// Default task(s).
	grunt.registerTask('default', ['bower_concat','less','uglify', 'watch']);
	grunt.registerTask('dist', ['bower_concat', 'less', 'uglify']);
	grunt.registerTask('build', ['less','watch']);

};