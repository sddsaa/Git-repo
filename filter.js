// filter
// callback是个函数，它接受三个参数并返回一个可转换为布尔值 true 和 false 的值。
// 按照索引的升序，对数组里存在的每个元素调用一次 callback，
// 并用使 callback 返回 true 的所有值构造一个新数组。callback 只被实际存在的数组元素调用；

var arr = [1,10,2,20,30];
var arr1 = [1,10,2,20,30];

// arr.filter(console.log);
// arr.filter(function (t) {
//     console.log(t > 10);
// });
//结果 false * 3  true*2


//增加原型方法

Array.prototype.myFilter = function (callback) {
    var arr = [];
    if (typeof callback !== "function"){
        throw TypeError (callback + " is not a function");
    }
    for(var i = 0; i < this.length; i++){
        if (Object.prototype.hasOwnProperty.call(this,i)){
            arr.push(callback(this,i,array)) && arr.push(this[i]);
        }
    }
    return arr;
};

arr.filter(console.log);
arr.filter(function (t) {
    console.log(t > 10);
});

