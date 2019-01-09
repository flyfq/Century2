let gulp = require("gulp");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let cleancss = require("gulp-clean-css");
let webserver = require("gulp-webserver");
let sass = require("gulp-sass");



//yintao01分支下的修改，又改了东西
gulp.task("copy",function(){
	gulp.src("./src/**/*.*").pipe(gulp.dest("./public"))
})

gulp.task("buildcss",function(){
	gulp.src("./src/**/*.scss")
	// .pipe(cleancss())
	.pipe(sass())
	.pipe(gulp.dest("./public"))
})

gulp.task("buildjs",function(){
	gulp.src("./src/scripts/libs/*.js").pipe(gulp.dest("./public/scripts/libs"))
	// gulp.src("./src/pages/*.js").pipe(gulp.dest("./dist/pages"))
	gulp.src("./src/scripts/*.js")
	.pipe(babel({
            presets: ['env']
        }))
	.pipe(uglify()).pipe(gulp.dest("./public/scripts"))
})

gulp.task("buildhtml",function(){
	gulp.src("./src/**/*.html").pipe(gulp.dest("./public"))
})

gulp.task("buildstaticresource",()=>{
	gulp.src("./src/images/*.*").pipe(gulp.dest("./public/images"))
})

gulp.task("watching",function(){
	gulp.watch("./src/**/*.scss",["buildcss"])
	gulp.watch("./src/**/*.js",["buildjs"])
	gulp.watch("./src/**/*.html",["buildhtml"])
	gulp.watch("./src/images/*.*",["buildstaticresource"])
})

gulp.task("webserver",["watching"],function(){
	gulp.src('public')
	.pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
			port:10002,
			// https:true,
			proxies:[{
				source:'/listmore',
				target:'https://category.vip.com/ajax/mapi.php',
			}]
    }));
})


gulp.task("build",["buildjs","buildhtml","buildcss","buildstaticresource"])