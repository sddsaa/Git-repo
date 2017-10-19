#H5高级课<br>
##学习理解ES5，Array新特性<br>
***Array是JavaScript中的数组对象,通过该对象可以创建数组,为数组添加元素,Array对象有很多方法,这些方法是我编程变的更加轻松。<br>***
<br>
1. concat() 	连接两个数组或更多数组,并返回结果。<br>
2. join() 	将数组转换为字符串。<br>
3. pop() 	删除并返回数组的最后一个元素。<br>
4. push() 	向数组的末尾添加一个或更多元素，并返回新的长度。<br>
5. reverse() 	颠倒数组中元素的顺序。<br>
6. shift()	删除并返回数组的第一个元素。<br>
7. slice()	从某个已有的数组返回选定的元素。<br>
8. sort()	对数组的元素进行排序。<br>
9. splice()	删除元素，并向数组添加新元素。<br>
10. toSource()	返回该对象的源代码。<br>
11. toString()	把数组转换为字符串，并返回结果。<br>
12. toLocaleString()	把数组转换为本地数组，并返回结果。<br>
13. unshift()	向数组的开头添加一个或更多元素并返回新的长度。<br>
14. valueOf()	返回数组对象的原始值<br>
<br>
##ES5新增Array方法<br>
***在ES5中新增了一些Array的方法,这些方法功能强大,可以帮助我们做很多事情,通过一些简单的阅读和尝试,你就可以使用这些方法来帮助你编程<br>***
<br>
方法:<br>
1. foreach <br>
2. map <br>
3. filter<br>
4. some<br>
5. every<br>
6. idnexOf<br>
7. lastIndexOf<br>
8. reduce <br>
9. reduceRight<br>
##IE适配<br>
***ie是十分让人头痛,对于很多的内容都是不兼容,但是可以通过Array原型扩展可以实现以上ES5新增的方法,在学习使用的同时,也对,IE进行了原型扩展,是IE也可以实现方法的功能,四个JS文件,完成了,四个方法的适配***

1. forEach.js forEach()的使用及IE适配
2. map.js map()的使用及IE适配
3. filter.js filter()的使用即IE适配
4. some.js some()的使用即IE适配