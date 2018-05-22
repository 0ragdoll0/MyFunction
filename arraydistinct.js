
Array.prototype.distinct=function(){
    var deleteArray=new Array();
    var i=0;
    // 借助数组长度动态变化，将每次操作后数组的第一项与其他项比较，如有重复，删除第一项，没有重复，则从下一项开始比较
    while(i<this.length){
        if(this.indexOf(this[i],i+1)!=-1){
            //与其他项比较有重复，将此项push到返回数组中并在原数组中删除此项。
            deleteArray.push(this[i]);
            // console.log("删除此项"+this[i]);
            this.splice(i,1);

            //由于此步操作中删除了一项，因此下一项提前，不需要再将i加一
        }
        else{
            //没有重复项，可以验证下一项
            i=i+1;
        }
    }
    return deleteArray;
};
var inputarray=[2,5,76,5,34,2,31,2,1,1,6,5];
console.log("原数组："+inputarray);
var result=inputarray.distinct();
console.log("去重后数组:"+inputarray);
console.log("删除项数组:"+result);

console.log([8,3,4,5,4,3]);
console.log(Array.from(new Set([8,3,4,5,4,3])))
