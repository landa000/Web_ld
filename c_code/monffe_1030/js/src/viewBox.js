// viewBox.js

(function($){
  var viewBox = $('#viewBox');

  var backImg = viewBox.find('.back_img');
  var backLi = backImg.find('li'); 
  // 순서를 언급시엔 eq()메소드를 사용 0~.... 역순은 -1~
  // 복제기능 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true 매개변수를 입력
  // 마지막요소 복제에 의한 내용변경
  console.log(backLi.length);
  var backLiLast = backLi.eq(-1).clone();
  backImg.prepend(backLiLast);
  var reBackLi = backImg.find('li'); // 복제 후 갯수 재파악
  // console.log(reBackLi.length);
  backImg.css({'marginLeft' :-100 +'%', 'width' : (reBackLi.length * 100) +'%'}); // 크기변경
  reBackLi.css({'width' : (100 / reBackLi.length) + '%'}); // 내부요소 크기변경

  // 슬라이드버튼
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0); // 버튼
  var prevSlideBtn = slideBtn.children('button').eq(1); // 버튼

  var slideN = 0;
  nextSlideBtn.on('click',function(e){
    // a, button 요소처럼 event 기능이 내장된 요소는 미리 해당기능을 제거
    e.preventDefault();
    slideN += 1;
    // if(){}else{} // callback
    backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
      if(slideN >= backLi.length - 1){
        slideN = -1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      }
    });
  });
  prevSlideBtn.on('click',function(e){
    e.preventDefault();
    slideN -= 1;
    backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
      if( slideN <= -1 ){
        slideN = backLi.length-1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      }
    })
  })
  // $('li').on('click', function(){
  //   $(this).index
  // });

})(jQuery);


// var reFn = function(i){
//   i += 1
//   console.log(i);
//   if(i < 20){
//     reFn(i)
//   }else{
//     console.log ('20이 됐습니다.')
//   }
// }
// reFn(1);

/* jQuery에서 콜백함수란?

  하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태
  단, animation 기능을 가진 메소드 및 이벤트만 콜백함수의 기능을 가질 수 있다.

  selector.on('click', function(){
    selector.animate({기능수행},function(){})
  })
  1. 클릭 2. 애니메이션 3. 함수작동
*/

/* jQuery selector

  * #box -> $('#box');aa
  * .box -> $('.box');
  * ul>li -> $('ul>li'); --> $('ul').children('li');
  * ul li -> $('ul li'); --> $('ul').find('li');
  * dt+dd -> $('dt+dd'); --> $('dt').next('dd');
  * dt~dd -> $('dt~dd'); --> $('dt').nextAll('dd');
  * 이전 형제 선택        --> $('dt').prev('dd');
  * 이전 형제 전부        --> $('dt').prevAll('dd');
  * 자신을 제외한 형제    --> $('dt').siblings('dd');
  * 부모형제를 선택       --> $('dt').parent('dl'); $('dt').parentUntil('dd');

// =============================================================

  *css 
  js : selector.style.backgroundColor = '#acf';
       selector.style = 'backgroundColor:#fca; color:#fff;';
  
  jQuery : selector.css({'attribute' : 'value', 'attribute' : 'value' ...});
*/