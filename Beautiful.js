/**
 * Created by zhangmike on 2017/2/20.
 */
var Compiler = require('./Compiler');
var FacePlugin = require('./plugin/FacePlugin');
var EyePlugin = require('./plugin/EyePlugin');
var EntryPlugin = require('./plugin/EntryPlugin');

var Beautiful = function () {

}

Beautiful.prototype.process = function (options) {
    if (options.description) {
        console.log('但求天下无丑陋');
        console.log('---->');
        console.log('      整形心愿：', options.description);
    }
    var compiler = new Compiler();
    compiler.apply(new FacePlugin());
    compiler.apply(new EyePlugin());
    if(options.plugins && Array.isArray(options.plugins)) {
        compiler.apply.apply(compiler, options.plugins);
    }
    if (options.loaders) {
        compiler.loaders = options.loaders;
    }
    compiler.apply(new EntryPlugin());
    return compiler;
}

module.exports = Beautiful;