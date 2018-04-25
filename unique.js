function unique(arr){
    let len=arr.length;
    let mapObj={};
    let result={arrneed:[],arrdelete:[]};
    let deletearr=[];
    for(let i=0;i<len;i++){
        if(!mapObj[arr[i]]){
            mapObj[arr[i]]=1;
            result.arrneed.push(arr[i]);
        }else{
            mapObj[arr[i]]+=1;
            result.arrdelete.push(arr[i]);
        }
    }
    return result;
}

console.log(unique([3,4,5,2,3,2,6,3,2]).arrdelete)
