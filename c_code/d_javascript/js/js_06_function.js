// js_06_function

// var i = 0;
// console.log(i);

// 함수는 어떤 기능을 수행하도록 처리하게 만든 형태
// 함수를 호출하여 사용할 땐 '이름()' 

var fn = function(){
  return 10;
};

var fnResult = fn();
// console.log(fnResult);

/*var fn2 = function(){
  console.log(20);
};
fn2();*/ // 사용X

var fnR = 10; // 값 자체가 지정됨 - 인지됨
// sconsole.log(fnR);
var fn = function(){ return 20; }; // 인지X

fnR = fn();
// console.log( fnR );

var fn2 = function(a){ return a*a;}
fnR = fn2(16); // 5가 a로 이동 -> 리턴 a로 그대로 나옴 -> 결과 5
// console.log( fnR );

// var old = 35;
// var ret;

var MyOld = function(old){
  var ret;
  if(old < 20){
    ret = '아직 미성년자입니다.';
  }else if(old < 30){
    ret = '아직 20대입니다.';
  }else if(old < 60){
    ret = '열심히 일하시는 중입니다..';
  }else {
    ret = '이제 즐기면서 사세요~';
  }
  return ret;
};

// console.log(ret);
// console.log(MyOld(25)); -> O
// console.log(ret); -> X

// function()=매개변수argument, ret=전역변수(함수 바깥에 위치) old=인자(또는 인수)
// 전역변수, 지역변수, 익명함수, 기명함수
// 함수 : 함수 선언식 - 사용자제, 함수 표현식 - 사용O

function DecFn (){ return 1;} 
// 함수 선언식(declarations), hoisting현상(아래에 위치했으나 첫줄에 위치한걸로 인식됨), 기명함수
var ExpFn = function(){ return 2;} 
// 함수 표현식(Expression), 변수명이 hoisting 현상 발생, 익명함수

// console.log( DecFn() );
// console.log( ExpFn() );

// 함수는 최초의 형태 하나만 존재하므로, 이를 복제하여 사용하는 개념 - 생성자 함수
// 생성자 바꿔치기

// var myNewFn = new Function(){};
var myNewFn = function(james){
  this.name = james;
  this.family = 'park';
  this.fullName = this.name + ' ' + this.family;
  // return james + ' ' + family;
}

var a = new myNewFn('jake');
// console.log ( a.fullName );

// this는 js에서 2가지 개념을 가진다 1.(window), 2.(생성자 처리 시 입력 된 매개변수or선택자체)
// ==================================================

// console.log( this );

// camelCase - 주로 변수, 작은 개념
// under_snake
// PascalCase - 주로 함수, 큰 개념

// 선언식(함수 자체에 이름 부여하는 방법), 표현식(함수를 변수에 대입하는 방법)
// 생성자함수(함수기능을 복제하여 재처리하는 함수)
// 즉시실행함수(함수지만 일회용)
/*
var ffn = function(){
  var i = 10;
  var j = 7;
  return i + j;
};
// console.log(ffn());
*/
/*
 var ffn2 = function(){
   var i = 10;
   var j = 7;
   console.log(i * j);
   return i * j;

 };
 ffn2(); */
/*
(function(){
  var i = 10;
  var j = 7;
  console.log(i * j);
  return i * j;
})(); */ // 즉시실행함수(IIFE:immediately Invoked Function Expression)

(function(k){
  var i = k;
  var j = 7;
  console.log(i * j);
  return i * j;
})(10); // 매개변수형태

var F = function(a){ return a*3 };
F(3);
