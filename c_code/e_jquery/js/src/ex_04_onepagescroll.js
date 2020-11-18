// ex_04_onepagescroll

(function($){
  /* 
  1. 스크롤시 $('#headBox') 상단 고정
   - 필요한것 : offset().top, scrollTop.on('scroll),$(window)
    1.1 상단이동버튼
    - 안보이는 상태에서 1000px 이동 후 나타나기
  2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제처리
  */

  var win = $(window); // window는 감싸면 안됨
  var headBox = $('#headBox');
  // 브라우저 상단에서 얼마나 떨어져있는지 체크
  var headOffset = $(headBox).offset().top;
  var topBtn = $('.top_move_btn');

  var navBox = $('#navBox');
  var navBtn = navBox.find('li');

  topBtn.hide();

  win.on('scroll', function(e){
    var winSt = win.scrollTop();
    if(winSt >= headOffset){
      headBox.css({'position':'fixed','top':'0','zIndex':'1500'});
    }else{
      headBox.removeAttr('style');
    }

    if(winSt >= 1000){
      topBtn.fadeIn();
    }else{
      topBtn.stop().fadeOut();
    }

    (winSt >= 500) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); // (해당 조건) ?참/거짓 질문 참일시 시행 : 거짓일시 실행
  });

  topBtn.on('click',function(e){
    e.preventDefault();
    var it = $(this).find('a');
    
    var itAttr = it.attr('href');// a요소의 링크 파악

    var itOffset = $(itAttr).offset().top;

    $('html, body').animate({scrollTop : itOffset});
    // $('html, body').animate({scrollTop : 0}); - 단독사용가능
  });

// 2.
    var popupDp = $('.popup_dp');
    var popupBtn = popupDp.find('button');
    popupBtn.on('click',function(e){
      popupDp.remove();
    });

    navBtn.on('click', function(e){
    e.preventDefault();
    var it = $(this).find('a');
    
    var itAttr = it.attr('href');

    var itOffset = $(itAttr).offset().top;

    $('html, body').animate({ scrollTop : itOffset });
  });


})(jQuery);