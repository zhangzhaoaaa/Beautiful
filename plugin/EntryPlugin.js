/**
 * Created by zhangmike on 2017/2/20.
 */
function EntryPlugin() {

}

EntryPlugin.prototype.apply = function (compiler) {
    compiler.plugin("entry-option", function () {
        console.log('---->');
        console.log('      整形前的准确分析和定位...');
    })
}

module.exports = EntryPlugin;