// ex_02_slideBtnBanner_2.js

(function($){

  var slide = $('.slide_02');
  var slideBtnPart = slide.find('.slide_btn');
  var slideBtn = slideBtnPart.children('button');

  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;

  // slideLi.not( $('.action') ).hide;
  slideLi.hide();
  indexSlide.find('.action').show();

// =========================================
  var actionIndex;
  var MyActionIndex = function(){
    var i = 0, actionCheck; // 해당 함수 내에서만 사용하므로 내부에 변수 넣음
    for( ;i<liLen;i+=1){
      actionCheck = slideLi.eq(i).hasClass('action');//i번째 li에 class명이 있는지 확인
      if(actionCheck){
        actionIndex = i;
        break;
      }// if end
    }
    // console.log( actionIndex );
    return actionIndex; // 함수 말미에 꼭 필요
  };
// =========================================
  var SlideAction = function(){
    slideLi.eq(indexN).stop().show(); // 다음 li 나타나게 함
    slideLi.eq(actionIndex).stop().fadeOut(timed/2,function(){ // 니와있던 li 페이드아웃 처리
      slideLi.eq(indexN).addClass('action');
      slideLi.eq(indexN).siblings().removeClass('action');

        setTimeout(function(){
          permission = true;
        },timed/5);
    });// fadeout
  }
// =========================================
  var indexN = 0;
  var permission = true;
  var timed = 500;

  slideBtn.on('click', function(e){
    e.preventDefault();
    MyActionIndex();
    if(permission === true){
      permission = false;
      var it = $(this).attr('class');
      if( it === 'next_btn'){
        indexN += 1;
          if(indexN >= liLen ){
            indexN = 0; // 0,1,2,3,4만 존재하기 때문에 숫자를 조정함
          }
          SlideAction();

      }else if( it === 'prev_btn'){
        indexN -= 1;
        SlideAction();
        if(indexN <= -1 ){
          indexN = liLen -1;
        }
      }// if() end
      console.log( indexN );
    }
  });// slideBtn.on('click') end

})(jQuery);