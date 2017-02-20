/**
 * Created by zhangmike on 2017/2/20.
 */
var Beautiful = require('./Beautiful');
var conf = require('./bea.conf');
var compiler = new Beautiful().process(conf);

compiler.run(function () {
    console.log('---->');
    console.log('      我变美了...');
});
