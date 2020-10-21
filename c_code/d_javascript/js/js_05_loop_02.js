// js_05_loop_02.js
// 시작의 값, 조건비교, 연산

/*
  var n = 0;
  while(n < 5){
    console.log(n);
    n += 1;
  }
*/

/*
for(var n = 0 ; n < 5 ; n+= 1){
  console.log(n);
} */

/*
var y = 0;
for( ; y < 10 ; ){
  console.log(y);
  y += 1;
}

for(var y=0; y<10; y+=1){
  console.log(y);
}  

var k = 0;
for ( ; k < 5 ; k+=1 ){
  console.log(k);
}
console.log('k:', k);*/
// let, const <-> var 혼용 불가능

/*
var arr = [ '포도', '사과', '바나나', '딸기'];
var classN= [ 'grape', 'apple', 'banana', 'straw' ];

var testEl = document.getElementsByClassName('test')[0];
// 요소삽입 조건 : 1. 요소생성 2. 요소내용기입 3. 요소삽입
var pEl; // 변수정의
var i = 0; // 최초의값
for( ; i < 4 ; i+=1 ){
  pEl = document.createElement('p'); // p요소 생성
  pEl.innerText = arr[i] + '가 바구니속에'; //p요소에 들어갈 내용
  // 1. setAttribute - 속성설정, 다른 속성도 설정가능
  // pEl.setAttribute('class',classN[i]); 
  // 2. pEl.className = classN[i]; - 선언, class속성만 변경가능
  // 3. pEl.classList.add(classN[i]); + add대신 remove, toggle도 존재
  pEl.classList.add(classN[i]);

  testEl.append(pEl); // 화면상에 표시
}
pEl.classList.add('testClass'); */

var coffee = ['americano','esspresso', 'latte','cafe mocha','flat white','cappuccino'];

//for(var j=0; j< coffee.length ;j+=1){console.log('1:',coffee[j]);}

// for ~in 문법은 객체를 위한 형식, 배열을 위해 만든 형식이 아니다.
// for(var i in coffee){console.log('2:', coffee[i]);}

// 배열형식을 사용할때에는 for, forEach를 사용
//coffee.forEach(function(data, index){console.log( data, index );});

// for ~ in을 위해서는 객체를 위해 사용
var obj = {
  'spring' : 'black tea',
  'summer' : 'ice americano',
  'autumn' : 'hot choco',
  'winter' : 'pepsi'
};
// var o = 0;
// for( ; o<4 ; o +=1 ){console.log(obj);}
for(var o in obj){
  console.log( o+':'+obj[o] ); // obj.o로 인식
}
// 반복문
// for, forEach, for-in

var i = 0;
for( ; i<100 ; i+=1){
  if(i < 10){
    console.log( '0' + i );
  }else if(i === 31){
    break;
  }else{
  console.log(i);
  }
}