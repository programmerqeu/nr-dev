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
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.loadNpmTasks('grunt-readme-generator');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'app/scss',
					cssDir: 'www/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'app/scss',
					cssDir: 'www/css'
				}
			}
		},
		compile: {
			cssmin: {
				css: {
					src: 'www/css/main.css',
					dest: 'www/css/main.min.css'
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
			// libraries
			components: {
				src: [
					'www/lib/angular-translate/angular-translate.min.js',
					'www/lib/ngCordova/dist/ng-cordova.min.js'
				],
				dest: 'www/lib/libraries.min.js'
			},
			// scripts
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
					'app/js/controller/contactCtrl.js',
					'app/js/controller/homeCtrl.js',
					'app/js/controller/imprintCtrl.js'
				],
				dest: 'www/js/controller.js'
			},
			directive: {
				src: [
					'app/js/directive/gravatarDirective.js'
				],
				dest: 'www/js/directive.js'
			},
			service: {
				src: [
					'app/js/service/contactService.js'
				],
				dest: 'www/js/service.js'
			},
			i18n: {
				src: ['app/js/i18n/*'],
				dest: 'www/js/i18n.js'
			}
		},
		notify: {
			compress: {
				options: {
					title: 'Compress task Complete',
					message: 'Concat and uglify finished running'
				}
			},
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
		uglify: {
			options: {
				sourceMap: true,
				sourceMapName: 'www/js/sourcemap.map',
				beautify: false,
				compress: true,
				report: 'gzip'
			},
			dist: {
				files: {
					'www/js/nrdev.min.js': [
						'www/js/i18n.js',
						'www/js/config.js',
						'www/js/app.js',
						'www/js/directive.js',
						'www/js/service.js',
						'www/js/controller.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: 'app/scss/**/*.scss',
				tasks: ['compass'],
				options: {
					livereload: false
				}
			},
			scripts: {
				files: ['app/js/**/*.js'],
				tasks: [
					'compress'
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
				]
			}
		}
	});

	grunt.registerTask('scss', [
		'sass',
		'cssmin',
		'notify:watch'
	]);

	grunt.registerTask('compress', [
		'concat',
		'uglify',
		'notify:compress'
	]);

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('readme', ['readme_generator']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch']);

};
