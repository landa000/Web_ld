// js_08_array2.js

var coffee = ['espresso','americano','cappuccino','latte','cafemocha',
  'vanillalatte'];

// console.log(coffee);
var cLen = coffee.length;
// console.log(cLen);

// pop(), push(), shift(), unshift(),concat()  
// console.log(coffee[2]);

var i = coffee.indexOf(); // 찾는 값이 없을경우 -1, 있을경우 해당하는 위치값
// console.log(i);

var str = 'ansan,suwon,busan,gangreong,seoul,jeju,incheon';
//console.log(str.indexOf('ju'));
// console.log(str.length);
var strToArray = str.split(',');
// console.log(strToArray); // split 문자를 배열화

var tel = '031-999-9980';
// console.log(tel.split('-'));

var coffeeToPar = coffee.join('-'); // join 배열을 문자화 ('insert') 배열 사이에 글자삽입
// console.log(coffeeToPar);

var coffeeSort = coffee.sort(); // sort 순서 정렬(기본 글자순)
// console.log(coffeeSort);
// var coffeeSortReverse = coffeeSort.reverse();
// console.log(coffeeSortReverse);
var coffeeDec = coffee.sort(function(a, b){return b - a});
// console.log(coffeeDec);

var arr = [ 1,5,10,3,2,6,5,9,8];
// console.log(arr.sort(function(a,b){return a -b }));
// 1,5 - 1,5
// 5,10 - 1,5,10
// 10,3 - 3,10 - 1,5,3,10
// 10,2 - 2,10 - 1,5,3,2,10 ... 

// coffee.push('iceTea');
// console.log(coffee);
// coffee.pop();

var sp = coffee.splice(1,2); // var.splice(시작순서, 갯수);
// console.log(coffee);

var a = 'hi';
var b = a;
    a = "bye";
// console.log(a,b); // 반영X

var c = ['toDay'];
var d = c;
    c[0] = 'nextDay';
// console.log(c[0],d[0]); // 반영O 참조변수
var e = c.slice();
    c[0] = 'yesterDay';
console.log(c[0],e[0]);