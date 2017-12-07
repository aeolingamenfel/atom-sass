const gulp = require("gulp");
const sass = require("gulp-sass");

const SASS_SOURCES = [
    "sass/*.scss",
    "sass/**/*.scss"
];

gulp.task("build-css", function() {
    return gulp.src(SASS_SOURCES)
        .pipe(sass())
        .pipe(gulp.dest("css/"));
});