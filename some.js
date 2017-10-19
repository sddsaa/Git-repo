//some
// callback 应该是个函数，它接受三个参数并返回一个可转换为布尔值 true 和 false 的值。
// some 按照索引的升序，对数组里存在的每个元素调用一次 callback，
// 直到他找到一个使 callback 返回 true 的元素。如果找到这样的元素，
// some 马上返回 true，否则，some 返回 false。callback 只被实际存在的数组元素调用；
// 它不会被缺少的数组元素调用


var arr = [1,10,2,20,30];
var arr1 = [1,10,2,20,30];


// arr.some(console.log);
//
// console.log(arr.some(function (t) {
//     t >100;
// }));


Array.prototype.mySome = function (callback) {
    var pass = false;
    if (typeof callback !== "function") {
        throw TypeError(callback + " is not a function");
    }
    for(var i = 0; i < this.length; i++) {
        if (Object.prototype.hasOwnProperty.call(this, i)) {
            if (pass===true) break;
            callback(this[i],i,this);

        }
    }
   return pass;
};

arr1.mySome(console.log);
//
console.log(arr1.mySome(function (t) {
    t > 100;
}));
