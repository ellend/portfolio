
//dependencies
var gulp = require('gulp'),
gutil = require('gulp-util'),
compass = require('gulp-compass'),
concat = require('gulp-concat'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyHTML = require('gulp-minify-html'),
imagemin = require('gulp-imagemin'),
pngcrush = require('imagemin-pngcrush'),
connect = require('gulp-connect');

//variable declarations only
var env,
jsSources,
sassSources,
htmlSources,
sassStyle,
outputDir;

//check if the node env variable is set, OR default to "development"
var env = process.env.NODE_ENV || 'development';

if (env==='development') {
	outputDir = 'builds/development/';
	sassStyle = 'expanded';
} else {
	outputDir = 'builds/production/';
	sassStyle = 'compressed';
}

//actually assign variables here:
jsSources = [
'components/scripts/*.js',
];

sassSources = [
'components/sass/styles.scss'
];

htmlSources = [outputDir + '*.html'];

//Keep with comments and uncompressed out for "development", don't minify

gulp.task('images', function() {
	gulp.src('builds/development/img/**/*.*')
		.pipe(gulpif(env === 'production', imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			use: [pngcrush()]
		})))
		.pipe(gulpif(env === 'production', gulp.dest(outputDir + 'img')))
		.pipe(connect.reload())
});

//javascrit tasks
gulp.task('scripts', function () {
	gulp.src(jsSources) //sucks in the stream of files laid out in variable above
		.pipe(concat('script.js')) //"pipes" them through these tasks
		.pipe(gulpif(env === 'production', uglify())) //compress JS for prod environment
		.pipe(gulp.dest(outputDir + 'js')) //output into destination files
		.pipe(connect.reload()) //let server know something has chnaged in these files
	});


var path = require('path');

gulp.task('compass', function() {
	gulp.src(sassSources)
	.pipe(compass({
		project: path.join(__dirname, 'components'),
		sass: 'sass',
		image: outputDir + 'img',
		require: ['modular-scale'],
		style: sassStyle
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest(outputDir + 'css'))
	.pipe(connect.reload())
});


//watch the JS source files [] <-- when something in those files changes, execute this script
// for SASS, doesn't watch changes in partials (@imports), use wildcard * for anything with sass extension
gulp.task('watch', function() {
	gulp.watch(jsSources, ['scripts']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch('builds/development/*html', ['html']);
	gulp.watch('builds/development/img/**/*.*', ['images']);
});

gulp.task('connect', function() {
	connect.server({
		root: outputDir,
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('builds/development/*html')
	.pipe(gulpif(env === 'production', minifyHTML()))
	.pipe(gulpif(env === 'production', gulp.dest(outputDir)))
	.pipe(connect.reload())
});



gulp.task('default', ['scripts', 'compass', 'images', 'connect', 'watch']);



































