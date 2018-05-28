var str="我是{name},年纪是{age}，你是{friend}";
        var obj={name:'ni',age:22,friend:'ziaco'};
    
        function trans(str,obj){
            let arr=str.split("");
            let leftarr=[];
            let rightarr=[];
            let result="";
            arr.forEach((element,index) => {
                if(element=='{'){
                    leftarr.push(index);
                }
                if(element=='}'){
                    rightarr.push(index);
                }
            });
            while(leftarr.length){
                var startp=leftarr.pop();
                var endp=rightarr.pop();
                var item=str.substring(startp+1,endp);
                arr.splice(startp,item.length+2,obj[item])
                
            }
            result=arr.join("");
            return result;
            
        }
        console.log(trans(str,obj));