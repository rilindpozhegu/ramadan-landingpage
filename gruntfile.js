module.exports = function(grunt) {

	// Configure

	grunt.initConfig({
		// pass in options to pluginsm references to files etc...
		concat:{
			js:{
				src:[
					'js/jquery.js',
					'js/bootstrap.min.js', // Boostrap Script.min General,
					'js/scrolling-nav.js', // Scrolling Nav Default Script,

					// Animation.css Scripts after scroll
					'js/wow.min.js',
					'js/animate.js',
					'js/steps_script.js',
					// --------------------------------// 
					
					],

				dest: 'build/scripts.js'
			},
			css: {
				src:['css/**/*.css'],
				dest: 'build/styles.css'
			}
		},
		watch: {
		  scripts: {
		    files: ['css/**/*.css'],
		    tasks: ['concat'],
		    options: {
		      spawn: false,
		    },
		  },
		},

	});


	//  Load Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks

	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('concat-css', ['concat:css']);


};