var array=[3,4,1,9,6,5];
//直接插入（稳定）
function insertionSort(array){
    var result=array.slice(0);
    var len=result.length;
    for(let i=1;i<len;i++){
        for(let j=i;j>0;j--){
            if(result[j]<result[j-1]){
                let tem=result[j];
                result[j]=result[j-1];
                result[j-1]=tem;

            }
        }
    }
    return result;
}

//希尔排序（不稳定）
function shellSort(array) {
    var result=array.slice(0);
    function swap(array, i, k) {
        var temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    var len = result.length;
    var gap = Math.floor(len/ 2);
    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            for (let j = i; 0 < j; j -= gap) {
                if (result[j - gap] > result[j]) {
                    swap(result, j - gap, j);
                } else {
                    break;
                }
            }
        }
        console.log(gap);
        gap = Math.floor(gap / 2);
    }
    return result;
}

//简单选择排序
function selectionSort(array) {
    var result=array.slice(0);
    var len = result.length;
    for (i = 0; i < len - 1; i++) {
      minIndex = i;
      minValue = result[minIndex];
      for (j = i + 1; j < len; j++) {
        if (result[j] < minValue) {
          minIndex = j;
          minValue = result[minIndex];
        }
      }
      // 交换位置
      temp = result[i];
      result[i] = minValue;
      result[minIndex] = temp;
    }
    return result;
  }

console.log(array);
console.log(selectionSort(array));