var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass-china'),
    minifycss = require('gulp-minify-css'),
    source = require('vinyl-source-stream'),
    autoprefixer = require('gulp-autoprefixer');
var tinylr;


// liveReload 自动刷新
function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);
    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

// liveReload
gulp.task('livereload', function() {
    tinylr = require('tiny-lr')();
    tinylr.listen(35729);
});

// sass 编译压缩 css 
gulp.task('styles', function() {
    return gulp.src('dist/sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 version', '> 5%']}))

        // .pipe(rename({
        //     suffix: '.min'  
        // }))
        .pipe(minifycss())
        .pipe(clean({
            compatibility: 'ie8'
        }))

        .pipe(gulp.dest('public/stylesheets'));
})

// es6 编译并压缩 es5 js
// gulp.task('convertJS', function(){
//   return gulp.src('dist/es6/*.js')
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(uglify())
//     .pipe(gulp.dest('public/javascripts'))
// })

// 合并并压缩css
// gulp.task('convertCSS', function(){
//   return gulp.src('app/css/*.css')
//     .pipe(concat('app.css'))
//     .pipe(cssnano())
//     .pipe(rename(function(path){
//       path.basename += '.min';
//     }))
//     .pipe(gulp.dest('dist/css'));
// })

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  // gulp.watch('app/css/*.css', ['convertCSS']);
  // gulp.watch('dist/es6/*.js', ['convertJS']); 
  gulp.watch('dist/sass/*.scss',['styles']);
  gulp.watch('public/stylesheets/**',notifyLiveReload);
  gulp.watch('views/**/*.*',notifyLiveReload);
  gulp.watch('public/javascripts/**',notifyLiveReload);
})

// gulp.task('autoFX',function(){
//   gulp.src('dist/sass/*.scss')
//   .pipe(autoprefixer({
//     browers:['last 2 versions'],
//     cascade:true,
//     remove:true
//   }))
//   .pipe(gulp.dest('public/stylesheets'))
// })
// browserify
// gulp.task("browserify", function () {
//     var b = browserify({
//         entries: "dist/js/app.js"
//     });

//     return b.bundle()
//         .pipe(source("bundle.js"))
//         .pipe(gulp.dest("dist/js"));
// });

gulp.task('default', ['livereload','styles', 'watch']);