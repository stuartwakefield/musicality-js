import gulp from 'gulp'
import babel from 'gulp-babel'
import browserify from 'browserify'
import uglify from 'gulp-uglify'
import del from 'del'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'

const paths = {
  mainScript: 'src/app.js',
  outFile: 'app.js',
  outDir: 'out',
  outPath: 'out/app.js'
}

gulp.task('clean', () =>
  del([paths.outDir]))

gulp.task('compile', ['clean'], () =>
  browserify(paths.mainScript, { debug: true })
    .transform(babelify)
    .bundle()
    .on('error', console.error)
    .pipe(source(paths.outFile))
    .pipe(gulp.dest(paths.outDir)))

gulp.task('minify', ['compile'], () =>
  gulp.src(paths.outPath)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(paths.outDir)))

gulp.task('default', ['minify'])
