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

	grunt.loadNpmTasks('grunt-readme-generator');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compile: {
			cssmin: {
				css: {
					src: 'www/css/main.css',
					dest: 'www/css/main.min.css'
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
			}
		},
		concat: {
			options: {
				separator: '',
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - <%= pkg.author %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */\n' +
				'\'use strict\';\n',
				process: function (src, filepath) {
					return '// Source: ' + filepath + '\n' +
					src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				}
			},
			app: {
				src: ['app/js/app.js'],
				dest: 'www/js/app.js'
			},
			config: {
				src: ['app/js/config.js'],
				dest: 'www/js/config.js'
			},
			controller: {
				src: [
					'app/js/controller/appCtrl.js',
					'app/js/controller/homeCtrl.js',
					'app/js/controller/contactCtrl.js',
					'app/js/controller/imprintCtrl.js'
				],
				dest: 'www/js/controller.js'
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www',
					keepalive: true
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
		},
		readme_generator: {
			nr: {
				options: {
					readme_folder: 'docs',
					output: 'README.md',
					table_of_contents: true,
					toc_extra_links: [],
					generate_changelog: false,
					has_travis: true,
					github_username: 'vergissberlin',
					travis_branch: 'develop',
					generate_footer: true,
					generate_title: true,
					package_title: 'NR[dev] - Cross platform application',
					package_name: 'nr-dev',
					package_desc: 'The is a cross application for mobile devices. Created by and for developers of Netresearch GmbH & Co.KG. The app includes experiments with various API´s. Manage colors of lamps in the office, games from noise, let you list parts of the internal address book. It is based on Ionic (http://ionicframework.com) base project. A special thanks goes to the developers of this project.',
					informative: true,
					h1: '#',
					h2: '##',
					back_to_top_custom: null
				},
				order: {
					'roadmap.md': 'Roadmap',
					'ideas.md': 'Ideas',
					'implementation.md': 'Implementation and Requirements',
					'contribute.md': 'Contribute'
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
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['compass'],
				options: {
					livereload: false
				}
			},
			scripts: {
				files: ['app/js/**/*.js'],
				tasks: [
					'concat'
				],
				options: {
					spawn: false
				}
			},
			tests: {
				files: [
					'tests/**/*.js',
					'www/templates/**/*.html',
					'www/js/**/*.js'
				],
				tasks: ['shell:dalekjs']
			}
		}
	});

	grunt.registerTask('server', [
		'connect:server'
	]);

	grunt.registerTask('cc', [
		'compile:concat'
	]);

	grunt.registerTask('preview', [
		'connect:preview'
	]);

	grunt.registerTask('reports', [
		'connect:reports'
	]);

	grunt.registerTask('dalek', [
		'watch',
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
		'shell:dalekjsChrome',
		'notify:watch'
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
	grunt.registerTask('readme', ['readme_generator']);

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['dalek']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch']);

};
