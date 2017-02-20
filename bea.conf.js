/**
 * Created by zhangmike on 2017/2/20.
 */
var MouthPlugin = require('./plugin/MouthPlugin');
var NosePlugin = require('./plugin/NosePlugin');
var FaceSkinPlugin = require('./plugin/FaceSkinPlugin');
var AngelaBaby = require('./loaders/AngelaBaby');
module.exports = {
    description: "我知道我不漂亮，我没有自信，没有男生追我，但是我想通过整形变成AngelaBaby的模样，让自己变得自信",
    plugins: [
        new MouthPlugin(),
        new NosePlugin(),
        new FaceSkinPlugin()
    ],
    loaders:[
        AngelaBaby
    ]
}