/**
 * Created by zhangmike on 2017/2/20.
 */
var Tapable = require('tapable');
var Compiler = function () {
    Tapable.call(this);
}

Compiler.prototype = Object.create(Tapable.prototype);
Compiler.prototype.run = function(callback) {
    this.applyPluginsBailResult("entry-option");
    this.applyPluginsParallel("ready", this);
    this.applyPluginsParallel("make", this, function() {
        console.log('---->');
        console.log('      整形完毕...');
        callback();
    });
}

module.exports = Compiler;