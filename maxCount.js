function maxCount(str){
    let len=str.length;
    let charjson={};
    for(let i=0;i<len;i++){
        if(!charjson[str.charAt(i)]){
            charjson[str.charAt(i)]=1;
        }else{
            charjson[str.charAt(i)]+=1;
        }
    }
    var mostchar=str.charAt(0);
    var maxcount=charjson[str.charAt(0)];
    for(var k in charjson){
        if(charjson[k]>maxcount){
            mostchar=k;
            maxcount=charjson[k];
        }
    }
    return mostchar+" "+maxcount;
}
