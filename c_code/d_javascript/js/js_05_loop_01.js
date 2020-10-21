// js_05_loop_01.js

/* var n = 0;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n += 1;
console.log(n);
n ++;
console.log(n); */

/*
var k = 0; // 최초의 값
while( k < 10 ){ // 비교할 값
  console.log( 'k:', k);
  k += 1;
  // break;
}

console.log('k는 이제',k,'이 됐습니다.');
console.log('k는 이제',k,'입니다.');
*/

/*
var test = document.getElementsByClassName('test')[0]; 
var l = 0;
while( l <= 12){
  var p = document.createElement('p');
  p.innerText = l + '번째 p요소에 글자를 작성합니다.';
  test.append(p);
  l += 1;
}  
*/

var m = 0;
do{
  console.log(m);
  m += 1;
} while( m < 0 );

/*
  do{
    console.log( m );
    m += 1;
  } while( m < 0 );
*/

// 반복문의 중요포인트 3가지ㅏ : 첫번째 값, 조건, 조건의 수행(증감)
// while(조건){조건이 참이면, 기능수행}
// do {일단 수행} while(조건비교)

