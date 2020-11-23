// ex_07_mousewheel.js

(function($){
  var web = $('html,body');

  var wrap = $('#wrap');
  var permission = true;
  var count = 0;
  var pageOffset = [];
  var pageRoll = $('.page_roll'); // 클래스명 부여된 태그 선택
  var i = 0;

  for(;i<pageRoll.length;i+=1){
    pageOffset[i] = pageRoll.eq(i).offset().top;
  } // pageOffset 값 설정 - 클래스명 부여된 태그 갯수(i) 확인, 태그의 시작점 높이 확인
  console.log(pageOffset);

  web.animate({scrollTop:pageOffset[0]});
  wrap.on('mousewheel DOMMouseScroll',function(e){
    e.preventDefault();
    if(permission){
      permission = false;

      // 휠 움직임 파악
      // - 파이어폭스 외 다른 부라우저
      // console.log(e.originalEvent.wheelDelta)
      // - 파이어폭스
      // console.log(e.originalEvent.detail);

      var eOriginal = e.originalEvent;
        // 수치값을 가질수 있는지 여부 확인(반대성향)
        // console.log(!eOriginal.wheelDelta);
      var mWheel;

      if(!eOriginal.wheelDelta){ //firefox 브라우저 처리
        mWheel = eOriginal.detail * -40; // 3,-3이므로 -40을 곱해 동일수치로 만듦
      }else{ // firefox 이외의 브라우저
        mWheel = eOriginal.wheelDelta; // -120,120
      }
      // 터치마우스 또는 노트북의 터치패드, 트랙패드 등의 경우는 수치가 일정하지 않음 

      if( mWheel < 0 && count < pageOffset.length-1 ){ // (휠을) 아래로 스크롤
        count += 1;
      }else if( mWheel > 0 && count >= 0){ // 위로 스크롤
        count -= 1;
      }

      console.log(count, pageOffset[count]);

      web.animate({scrollTop:pageOffset[count]+'px'},function(){
        setTimeout(function(){
          permission = true;
        },100);
      });

    } // if(permission)
  });

}(jQuery));