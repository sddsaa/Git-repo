//map 的参数callback是个函数，它接受三个参数(value,index,array)。map 按照索引的升序，
// 对数组里存在的每个元素调用一次callback，并用结果构造一个新数组。
// callback 只被实际存在的数组元素调用；它不会被缺少的数组元素调用


var arr = [1,10,2,20,30];
var arr1 = [1,10,2,20,30];

arr.map(1);
// arr.map(function (i) {
//     console.log(i*i) ;
// });


Array.prototype.myMap = function (callback) {
    var arr = [];
    if (typeof callback !== "function"){
        throw TypeError (callback + " is not a function");
    }
    for(var i = 0; i < this.length; i++){
        if (Object.prototype.hasOwnProperty.call(this,i)) {
            arr.push(callback(this[i], i, this));
        }
    }
    return arr;
};

arr1.myMap(1);


