var minify = require("gulp-minify");
var gulp = require("gulp");
var concat = require("gulp-concat");

var src = ["src/lib/**/*.js", "src/apigClient.js"];

gulp.task("default", function(){
    gulp.src(src)
        .pipe(concat("api-gateway-sdk.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/"));
})

