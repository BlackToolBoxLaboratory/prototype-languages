const gulp = require("gulp");

const path_backup = "../codebase/prototype-languages/";

gulp.task("copy2codebase", function(done) {
  gulp.src(["module/*"])
    .pipe(gulp.dest(path_backup + "module/"));
  gulp.src(["script/*"])
    .pipe(gulp.dest(path_backup + "script/"));
  gulp.src(["__tests__/*"])
    .pipe(gulp.dest(path_backup + "__tests__/"));
  gulp.src([
      "LICENSE",
      "README.md",  
      "CHANGELOGS.md",
      "rollup.config.js",
      "package.json",
      "package-lock.json",
      "gulpfile.js",
      ".eslintrc.js",
      ".babelrc"
    ])
    .pipe(gulp.dest(path_backup));
  done();
});

gulp.task("backup", gulp.series("copy2codebase"));
