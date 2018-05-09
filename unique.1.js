function unique(arr){
    let len=arr.length;
    let mapObj={};

    for(let i=0;i<arr.length;){
        if(!mapObj[arr[i]]){
            mapObj[arr[i]]=1;
            i=i+1;
            
        }else{
            //console.log(Object.prototype.toString.apply(arr));
            arr.splice(i,1);
            
        }
    }
    //return result;
}
var arr=[3,4,5,2,3,2,6,3,2];
console.log(arr);
unique(arr);
console.log(arr);
