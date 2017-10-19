//forEach的使用

//forEach 为 ES5中Array对象中的一个方法
// callback是个函数，它接受三个参数(value,index,array)。forEach 按照索引的升序，
// 对数组里存在的每个元素调用一次 callback。callback
// 只被实际存在的数组元素调用；它不会被缺少的数组元素调用

var arr = [1,10,2,20,30];
console.log(arr.push());
//传入console.log函数
// arr.forEach(console.log);
//数组中存在的每个数组,都调用了一次callback函数,每次都将三个参数,进行了一次输出
//传入alert
// arr.forEach(alert);

//出入匿名函数
arr.forEach(function (value,index,array) {
    console.log(value * value,index * value,array.push(value));
});

//arr.push会输出数组长度
//此时数组的长度的10,匿名函数对数组的操作,改变了数组
console.log(arr.push());