const gulp = require("gulp")

gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})

//处理js代码
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})

//处理scss 
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task("scss",function(){
    return gulp.src("./stylesheet/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += ".min"
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("images", function(){
    return gulp.src("./images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())
})

gulp.task("data", function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})

//一次性执行所有的代码
gulp.task("build", ["copy-html", "images", "data", "scripts", 'scss'], function(){
    console.log("项目建立成功");
  });
  
  
//启动监听
gulp.task("watch", function(){
    gulp.watch("*.html", ['copy-html']);
    gulp.watch("*.{jpg,png}", ['images']);
    gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("./stylesheet/*.scss", ['scss']);
  
})

//启动服务器
const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true
  })
})

//创建一个默认的任务
gulp.task("default", ['watch', 'server']);