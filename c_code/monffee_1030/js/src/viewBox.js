// viewBox.js

(function($){
  var viewBox = $('#viewBox');
  viewBox.css({'overflow':'hidden'});

  var backImg = viewBox.find('.back_img');
  var backLi = backImg.find('li'); 
  var permission = true;

  var slideIndicator = viewBox.find('.slide_indicator');
  var indiLi = slideIndicator.find('li'); // 1104 indicator 동작 
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
    if(permission){
      permission = false;

      slideN += 1;
    // if(){}else{} // callback
    backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
      if(slideN >= backLi.length - 1){
        slideN = -1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      }
      setTimeout(function(){
        permission=true;
      }, 300);
    });
      indiLi.eq(slideN).siblings().removeClass('action'); // 1104 indicator 동작 
      indiLi.eq(slideN).addClass('action'); // 인디케이터 클릭시 action 클래스 부여
    }
  });

  prevSlideBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
      permission = false;

      slideN -= 1;
    backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
      if( slideN <= -1 ){
        slideN = backLi.length-1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      }
      setTimeout(function(){
        permission=true;
      }, 300); // 시간값도 변수화 시키는게 좋음
    });
    indiLi.eq(slideN).siblings().removeClass('action'); // 1104 indicator 동작 
    indiLi.eq(slideN).addClass('action'); // 인디케이터 클릭시 action 클래스 부여
    }
  });

  indiLi.on('click',function(e){
    e.preventDefault();
    var its = $(this);
    slideN = its.index();
    // console.log(itsI);
    backImg.stop().animate({'left': slideN * -100+'%'});
    // indiLi.removeClass('action'); 클래스 삭제
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action'); // 인디케이터 클릭시 action 클래스 부여
  });
  // ============== focus ==================
    indiLi.children('a').on('focus', function(e){
      e.preventDefault();
      var its = $(this);
      slideN = its.parent().index() // a의 부모 li의 순서를 가져옴
      backImg.stop().animate({'left': slideN * -100+'%'});
      // indiLi.removeClass('action'); 클래스 삭제
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action'); // 인디케이터 클릭시 action 클래스 부여
    })

  // var slideIndi = viewBox.find('.slide_indicator');
  // var slideIndiA = slideIndi.find('a');
  // slideIndiA.on('click',function(e){
  //   e.preventDefault();})

  // $('li').on('click', function(){
  //   $(this).index
  // });

})(jQuery);

// if 조건이 제방같은 역할... 인듯.....

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