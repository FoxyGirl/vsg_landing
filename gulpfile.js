"use strict";

var gulp = require("gulp"),
    less = require("gulp-less"),
    sourcemaps   = require('gulp-sourcemaps'),
    plumber = require("gulp-plumber"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    server = require("browser-sync").create(),
    mqpacker = require("css-mqpacker"),
    minify = require("gulp-csso"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin"),
//var svgstore = require("gulp-svgstore");
//var svgmin = require("gulp-svgmin");
    uglify = require("gulp-uglify"),
    run = require("run-sequence"),
    del = require("del"),
    concat = require("gulp-concat");

gulp.task("style", function() {
    gulp.src("less/styles.less")
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
            ]}),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("scripts", function() {
    return gulp.src(["js/*.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("scripts.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build/js"));
});

gulp.task("images", function() {
    return gulp.src("build/img/**/*.{png,jpg,gif}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function() {
    return gulp.src([
        "fonts/**/*.*",
        "img/*.*",
        "*.html"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
    return del("build");
});

gulp.task("copy:html", function() {
    return gulp.src([
        "*.html"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});

gulp.task("build", function(fn) {
    run(
        "clean",
        "copy",
        "style",
        "images",
        "scripts",
        fn
    );
});


gulp.task("watch:html", ["copy:html"], function(done) {
    server.reload(),
        done();
});


gulp.task("serve", function() {
    server.init({
        server: "./build",
        notify: false,
        open: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html", ["watch:html"]);
    //gulp.watch("*.html").on("change", server.reload);
    gulp.watch("js/*.js").on("change", server.reload);
});
