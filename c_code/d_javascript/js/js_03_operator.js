// js_03_operator.js

console.log('start!!!');

// 연산자 : + = * / %
// 피연산자 : 1 + 1 에서 연산자를 제외한 부분

var n = 10;

/*
 var sum;
 sum = 10 + 20;
 console.log(sum);

 var min;
 min = 10 - 5;
 console.log(min);

  var multi;
  multi = 10 * 3;
  console.log(multi)

  var div;
  div = n / 3;
  divR = parseInt( div );
  // var divR = Math.round(div);
  console.log(divR);

  var fac;
  fac = n % 3; // 10 % 3 처리시 몫을 제외한 나머지
  console.log(fac);

console.log( 'n:', n );
// n = n + 2;
// A가 사과 2개, 2개를 추가로 가짐. 그러면 몇개를 가지고있는가
var a = 2;
var a = a + 2;
console.log( a );
// 그런 A에게 사과 10개를 추가로 줬다.
a = a + 10;
console.log( a ); // 위의 설정도 누적됨
// A에게서 사과 3개를 가져갔다.
a = a * 3;
console.log( a );
a += 5; // a = a + 5;
console.log( a );
a -= 10;
console.log( a );
a /= 2;
console.log( a );
a *=100
console.log( a ); // 대입연산자
*/

var b = 0;
// b +=1;
  console.log(++b); // 1
  ++b;
  ++b;
  ++b;
  ++b;
  ++b; // 선 연산 후 결과 (전치연산)
  console.log(b);
  console.log(--b);
  b++; // 선 결과 후 연산 (후치연산)
  console.log(b);
  console.log(b++);
  console.log(b++);
  console.log(b++);
  console.log('검증',b); // ++, -- 증감연산자