/**
 * Created by zhangmike on 2017/2/20.
 */
function FaceSkinPlugin() {

}
FaceSkinPlugin.prototype.apply = function (compiler) {
    compiler.plugin("ready", function (compiler) {
        compiler.plugin("operation", function (cb) {
            console.log('      皮肤整形完毕');
            cb();
        })
        console.log('      皮肤整形准备工作');
    })
}

module.exports = FaceSkinPlugin;