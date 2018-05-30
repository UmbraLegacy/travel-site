var gulp = require('gulp'),
        postcss = require("gulp-postcss"),
        autoprefixer = require("autoprefixer"),
        cssvars = require("postcss-simple-vars"),
        nested = require("postcss-nested"),
        cssImport = require("postcss-import");

gulp.task("styles", function () {
    // Pipe PostCSS style files to frameworks that translate into browser-compatible singular file.
    return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
            .on('error', function() {
                // Catch errors - prevent gulp from being stopped.
                this.emit('end');
            })
            .pipe(gulp.dest('./app/temp/styles'));
});