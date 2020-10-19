// js_04_condition.js

// 피자먹을까? -> 응
// 피자먹을까? -> 아니  -> 그럼 순대국먹자
// 피자먹을까? -> 아니  -> 그럼 순대국먹을까? -> 아니 -> 그럼 냉면먹을까? ...

// === 참이냐 아니냐(비교처리), 변수와 값이 같은지 비교여부로 참/거짓
// === 비교하여 참/거짓을 확인, !== 비교하여 값의 반대를 확인
// console.log ( q );

// if(){} switch(){} function(){} for(){} forEach(){} 
// ;안붙임, var(정의)와 혼용할수없음
// 변수 내용을 정의할 때와 함수를 호출log() 시 붙임 ;붙임

// if(조건){ 조건의 기능이 참이면 실행하는 내용 }
// if(조건){ 조건의 기능이 참이면 실행하는 내용 } else { 조건의 기능이 거짓일 경우 실행}


myEat = "냉면";
var myEatResult;

if(myEat === 'pizza'){
  // 참이면 수행
  myEatResult = myEat + ' ' + '먹으러가자!';
} else if( myEat =='순대국' ) {
  // if 첫문항이 거짓인경우, 새로운 if에 대한 문항이 참
  myEatResult = myEat + '에 고기먹을까?';
} else {
  myEatResult = '네가 먹고싶은' + ' ' + myEat + '먹으러 가자';
}

// console.log ( myEatResult )

/* 
var result = confirm('당신은 성인입니까?');
if(result === true) {
  location = "http://naver.com";
} else {
  location = "http://store.pinkfong.com/"
} 
*/

/*
var myOld = prompt('당신의 태어난 연도를 입력하세요.');
// console.log( myOld );
;
var nowYear = new Date().getFullYear(); // 현재연도 파악하는 가능
// console.log( nowYear - myOld + 1 );
var myAge = nowYear - myOld + 1;
if ( myAge < 20){
    console.log('당신은 아직 미성년자입니다.');
}else if( myAge >= 40 ){
    console.log('당신은 제법 중후한 분이겠군요?'); - 단수
}else{
    console.log('당신은 2~30대의 청년이시군요!') - 위 내용이 해당하지 않을시(하나만 씀)
}   */

// ----------------------------------------------------
// switch(값){
//  case 값1: 참이면 수행 break;
//  case 값2: 참이면 수행 break;
//  case 값3: 참이면 수행 break;
//  case 값4: 참이면 수행 break; ... - 다수분기(여러개 사용가능)
//  default: 위 기능이 모두 거짓일 경우 수행;
// }

var n = parseInt ( Math.random() * 6 ); // 랜덤숫자 0~5까지 생성
var r;
switch(n){
  case 1: 
    r = '1: 당신은 바보입니다.';  break;
  case 2: 
    r = '2: 당신은 똑똑합니다.';  break;
  case 3: 
    r = '3: 당신은 성실합니다.';  break;
  case 4: 
    r = '4: 당신은 장수합니다';  break;
  case 5: 
    r = '5: 당신은 유능합니다';  break;
  default :
    r = '당신은 해당이 없습니다';
}
// console.log( n, ' : ', r )


// ----------------------------------------------------
// if, switch는 하나의 문법구조를 이용하여 처리하는것
// 삼항연산자 : 3가지의 항목을 가진 연산자 기법
var i = 1;
// (조건 ) ? 조건이 참이면 수행 : 거짓이면 수행 (값은 하나)
( i > 10 ) ? console.log('i는 10보다 크다') : console.log('i는 10보다 작다') ;

// if(조건1){ 조건1이 참 } else if (조건1 아닌 조건2){조건2가 참}else if(){}else(){}
// switch(매개변수) { case value1: ... break; ... ... default:최종;}
// (조건) ? 조건이 참이면 : 조건이 거짓이면 ;