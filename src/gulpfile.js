var gulp = require("gulp");
var browserify = require("browserify");

gulp.task ("default", function(){

console.log("gulp gulp gulp")

});

gulp.task("compile:js", function(){

 var bundle = browserify("./js/main.js").bundle();

 bundle
 .pipe("main.js")
 .pipe(gulp.dest("./public/assets/js"))


});