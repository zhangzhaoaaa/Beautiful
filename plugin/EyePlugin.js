/**
 * Created by zhangmike on 2017/2/20.
 */
function EyePlugin() {

}
EyePlugin.prototype.apply = function (compiler) {
    compiler.plugin("ready", function (compiler) {
        compiler.plugin("operation", function (cb) {
            for (let load of compiler.loaders) {
                console.log("      眼部整形：使用" + load.name + "的" + load.eye);
            }
            console.log('      眼部整形完毕');
            cb();
        })
        console.log('      眼部整形准备工作');
    })
}

module.exports = EyePlugin;