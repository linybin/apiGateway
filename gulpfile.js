var minify = require("gulp-minify");
var gulp = require("gulp");
var concat = require("gulp-concat");

var srcs= [
    "src/lib/axios/dist/axios.standalone.js",
    "src/lib/CryptoJS/rollups/hmac-sha256.js",
    "src/lib/CryptoJS/rollups/sha256.js",
    "src/lib/CryptoJS/components/hmac.js",
    "src/lib/CryptoJS/components/enc-base64.js",
    "src/lib/url-template/url-template.js",
    "src/lib/apiGatewayCore/sigV4Client.js",
    "src/lib/apiGatewayCore/apiGatewayClient.js",
    "src/lib/apiGatewayCore/simpleHttpClient.js",
    "src/lib/apiGatewayCore/utils.js"]


gulp.task("default", function(){
    gulp.src(srcs)
    .pipe(concat("api-gateway-sdk.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/"));
})

