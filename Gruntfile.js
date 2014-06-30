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
		cssmin: {
			css: {
				src: 'www/css/ionic.app.css',
				dest: 'www/css/ionic.app.min.css'
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
