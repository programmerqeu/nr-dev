/**
 * NRdev
 *
 * @category    Deployment
 * @subcategory Taskmanger
 * @package     NRdev
 * @author      André Lademann <andre.lademann@netresearch.de>
 * @license     https://netresearch.de/license
 * @version     0.2.0
 */

'use strict';
module.exports = function (grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www'
				}
			},
			preview: {
				options: {
					port: 9002,
					base: 'www',
					keepalive: true
				}
			},
			reports: {
				options: {
					port: 9003,
					base: 'report/dalek',
					keepalive: true
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'www/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'www/css'
				}
			}
		},
		cssmin: {
			css: {
				src: 'www/css/ionic.app.css',
				dest: 'www/css/ionic.app.min.css'
			}
		},
		uglify: {
			js: {
				files: {
					'www/js/nrdev.js': ['www/js/app.js', 'www/js/config.js', 'www/js/controllers.js']
				}
			}
		},
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['compass'],
				options: {
					livereload: false
				}
			},
			scripts: {
				files: ['www/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			}
		},
		shell: {
			dalekjs: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.js'
			},
			dalekjsAdvanced: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/advanced/*.js'
			},
			dalekjsCoffee: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.coffee'
			},
			dalekjsMultiple: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.js -b phantomjs,chrome -r console,html'
			},
			dalekjsChrome: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.js -b chrome'
			},
			dalekjsHtmlreport: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.js -r console,html'
			},
			dalekjsFirefox: {
				options: {
					stdout: true,
					failOnError: true
				},
				command: 'dalek tests/integration/*.js -b firefox'
			}
		},

		notify: {
			watch: {
				options: {
					title: 'Task Complete',  // optional
					message: 'SASS and Uglify finished running' //required
				}
			},
			server: {
				options: {
					message: 'Server is ready!'
				}
			}
		}
	});

	grunt.registerTask('server', [
		'connect:server'
	]);

	grunt.registerTask('preview', [
		'connect:preview'
	]);

	grunt.registerTask('reports', [
		'connect:reports'
	]);

	grunt.registerTask('dalek', [
		'connect:server',
		'shell:dalekjs'
	]);
	grunt.registerTask('dalek_advanced', [
		'connect:server',
		'shell:dalekjsAdvanced'
	]);

	grunt.registerTask('dalek_coffee', [
		'connect:server',
		'shell:dalekjsCoffee'
	]);

	grunt.registerTask('dalek_htmlreport', [
		'connect:server',
		'shell:dalekjsHtmlreport'
	]);

	grunt.registerTask('dalek_chrome', [
		'connect:server',
		'shell:dalekjsChrome'
	]);

	grunt.registerTask('dalek_firefox', [
		'connect:server',
		'shell:dalekjsFirefox'
	]);

	grunt.registerTask('dalek_multiple', [
		'connect:server',
		'shell:dalekjsMultiple'
	]);

	grunt.registerTask('scss', [
		'sass',
		'cssmin',
		'notify:watch'
	]);

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['dalek']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch']);

};

