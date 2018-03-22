//缓存每项
var fibonacci=(function(){
	var cache={0:0,1:1};
	return function(n){
		return typeof cache[n]==='number'?cache[n]:cache[n]=fibonacci(n-1)+fibonacci(n-2);
	}
})();


//动态规划
function fibonacci(n) {
	let n1=1,
		n2=1,
		sum=1;
	for (let i=3;i<=n;i++) {
		sum = n1+n2;
		n1=n2;
		n2=sum;
	}
	return sum;
}
