/**
 * Created by zhangmike on 2017/2/20.
 */
function NosePlugin() {

}
NosePlugin.prototype.apply = function (compiler) {
    compiler.plugin("ready", function (compiler) {
        compiler.plugin("operation", function (cb) {
            console.log('      鼻子整形完毕');
            cb();
        })
        console.log('      鼻子整形准备工作');
    })
}

module.exports = NosePlugin;