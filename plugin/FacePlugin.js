/**
 * Created by zhangmike on 2017/2/20.
 */
function FacePlugin() {

}

FacePlugin.prototype.apply = function (compiler) {
    compiler.plugin("ready", function () {
        console.log('---->');
        console.log('      面部整形整体准备工作...');
        console.log('---->');
    });

    compiler.plugin("make", function (compiler, cb){
        console.log('---->');
        console.log('      进入手术阶段...');
        console.log('---->');
        compiler.applyPluginsAsync("operation", function() {
            console.log('---->');
            console.log('      面部整形手术完毕...');
            cb();
        })
    });

}

module.exports = FacePlugin;