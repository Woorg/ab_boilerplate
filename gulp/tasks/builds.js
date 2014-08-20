var gulp 		= require('gulp');
var runSequence = require('run-sequence');


gulp.task('build_dev', ['setDevelopment'], function() 
{
    runSequence('clean', 'js', 'stylus_all', 'jade_all', 'images');
});


gulp.task('build_prod', ['setProduction'], function() 
{
    runSequence('clean', 'js', 'stylus_prod', 'jade_prod', 'images');
});