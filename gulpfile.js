const gulp = require("gulp")
const ejs = require('gulp-ejs')
const rename = require ("gulp-rename")
const browserSync = require('browser-sync')

gulp.task('ejs', () => {
    return gulp.src('src/pages/*.ejs')
    .pipe(ejs({}))
    .pipe(rename((path) => {
        path.extname = ".html"
    }))
    .pipe(gulp.dest('./build'))
})

gulp.task('dev', () => {
    gulp.watch('src/**/*', gulp.series('default'))
    browserSync.init({
        server: {
            baseDir: 'build/'
        },
        port: 4000
    })
    gulp.watch('build/**/*', browserSync.reload)
})

gulp.task('default', gulp.series('ejs'))