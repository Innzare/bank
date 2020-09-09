let project_folder = require('path').basename(__dirname);
let source_folder = '#src';

let fs = require('fs');

let path = {

   build: {
      php: project_folder + '/',
      css: project_folder + '/css/',
      js: project_folder + '/js/',
      img: project_folder + '/img/',
      fonts: project_folder + '/fonts/'
   },

   src: {
      php: [source_folder + '/*.php', '!' + source_folder + '/_*.php'],
      css: source_folder + '/scss/style.scss',
      js: source_folder + '/js/script.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
      fonts: source_folder + '/fonts/*.ttf'
   },

   // watch: {
   //    html: source_folder + '/**/*.html',
   //    css: source_folder + '/scss/**/*.scss',
   //    js: source_folder + '/js/**/*.js',
   //    img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}'
   // },

   clean: './' + project_folder + '/'
}

let { src, dest } = require('gulp'),
   gulp = require('gulp'),
   browsersync = require('browser-sync').create(),
   fileInclude = require('gulp-file-include'), // Переменной присваивается.
   del = require('del'),
   scss = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   group_media = require('gulp-group-css-media-queries'),
   clean_css = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   uglify = require('gulp-uglify-es').default,
   imagemin = require('gulp-imagemin'),
   webp = require('gulp-webp'),
   webphtml = require('gulp-webp-html'),
   webpcss = require('gulp-webp-css'),
   ttf2woff = require('gulp-ttf2woff'),
   ttf2woff2 = require('gulp-ttf2woff2'),
   fonter = require('gulp-fonter');


//Функция для работы brovsersync автообновление браузера
function browserSync(params) {
   browsersync.init({
      server: {
         baseDir: './' + project_folder + '/' // Значение базовой папки
      },
      port: 3000, // Порт по которому будет открываться браузер
      notify: false //Чтобы откл уведомление об обновлении браузера
   })
}

// Функция для работы с html файлами
function html() {
   return src(path.src.php)
      .pipe(fileInclude())
      .pipe(webphtml())
      .pipe(dest(path.build.php))    //pipe - функция внутри который мы пишем те или иные команды для gulp
      .pipe(browsersync.stream())
}

// Функция для слежки за неосновным(подключаемыми к основным) файлами
// function watchFiles(params) {
//    // gulp.watch([path.watch.html], html);
//    gulp.watch([path.watch.css], css);
//    gulp.watch([path.watch.js], js);
//    gulp.watch([path.watch.img], images);
// }

// Функция для авто удаление папки dist
function clean(params) {
   return del(path.clean);
}

// Функция для работы с scss стилями
function css(params) {
   return src(path.src.css)
      .pipe(
         scss({
            outputStyle: "expanded"
         })
      )
      .pipe(
         group_media()
      )
      .pipe(
         autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
         })
      )
      .pipe(webpcss())
      .pipe(dest(path.build.css))
      .pipe(clean_css())
      .pipe(
         rename({
            extname: ".min.css"
         })
      )
      .pipe(dest(path.build.css))    //pipe - функция внутри который мы пишем те или иные команды для gulp
      .pipe(browsersync.stream())
}

// Функция для работы с js файлами
function js() {
   return src(path.src.js)
      .pipe(fileInclude())
      .pipe(dest(path.build.js))    //pipe - функция внутри который мы пишем те или иные команды для gulp
      .pipe(
         uglify()
      )
      .pipe(
         rename({
            extname: ".min.js"
         })
      )
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream())
}

// Фукция для работы с картинками 
function images() {
   return src(path.src.img)
      .pipe(
         webp({
            quality: 70
         })
      )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(
         imagemin({
            progressive: true,
            svgoPugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3  // 0 - 7
         })
      )
      .pipe(dest(path.build.img))    //pipe - функция внутри который мы пишем те или иные команды для gulp
      .pipe(browsersync.stream())
}

// Функция для обработки шрифтов
function fonts(params) {
   src(path.src.fonts)
      .pipe(ttf2woff())
      .pipe(dest(path.build.fonts));
   return src(path.src.fonts)
      .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts));
}

// Функция для подкл шрифтов к файлу стилей
function fontsStyle(params) {

   let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
   if (file_content == '') {
      fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
      return fs.readdir(path.build.fonts, function (err, items) {
         if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
               let fontname = items[i].split('.');
               fontname = fontname[0];
               if (c_fontname != fontname) {
                  fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
               }
               c_fontname = fontname;
            }
         }
      })
   }
}

// Функция колбэк для корректного подкл шрифтов к файлу стилей
function cb() { }

// Задача которая запускается отдельно(для преобразования формата шрифта otf в ttf)
gulp.task('otf2ttf', function () {
   return src([source_folder + '/fonts/*.otf'])
      .pipe(fonter({
         formats: ['ttf']
      }))
      .pipe(dest(source_folder + '/fonts/'))
})



let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), /*fontsStyle*/);
// let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
// exports.watch - watch;
exports.default = build;