var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data;

    // 处理
    // var inputs = parseInt(inputs);
    var result = deal(inputs);

    // 输出结果
    console.log(inputs);
});

//数据处理
function deal(inputs) {
    

    // dosomething
    var result=inputs;
    return result;
}