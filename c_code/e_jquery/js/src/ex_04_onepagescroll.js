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

    // (winSt >= 200) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); // (해당 조건) ?참/거짓 질문 참일시 시행 : 거짓일시 실행
  });

  // 스크롤 이동 버튼 ===================================================

  var scrollMove = function(e){
    e.preventDefault();
    var it = $(this).find('a');
    
    var itAttr = it.attr('href');

    var itOffset = $(itAttr).offset().top;

    $('html, body').animate({ scrollTop : itOffset })
  };

  topBtn.on('click', scrollMove);
  navBtn.on('click', scrollMove);

  // $.each(배열, 함수(요소 순서, 순서에 맞는 배열요소각각){}); 
  // 선택자.forEach(function(배열 요소 각각, 해당배열요소 순서){}); - javascript

  // var btnColle = [topBtn, navBtn]; 후 배열 이름을 대신 삽입가능
  // $.each([topBtn, navBtn], function(){
  //   navBtn.on('click',[a], scrollMove)
  // }); // git 보고 수정

// 2.
    var popupDp = $('.popup_dp');
    var popupBtn = popupDp.find('button');
    popupBtn.on('click',function(e){
      e.preventDefault();
      popupDp.remove();
    });

// ======================================================

    // var tabmenuBox = $('#conBox_01');
    // var tabmenuLi = tabmenuBox.find('li');
    // var tabmenuConBox = tabmenuBox.find('.tab_content');
    // var tabmenuCon = tabmenuConBox.children('div');

    var tabmenuLi = $('.tab_li li');
    var tabmenuCon  = $('.tab_content div');

    tabmenuLi.on('click',function(e){
      e.preventDefault();

      var it = $(this);
      var itI= it.index();
      
      tabmenuCon.eq(itI).show();
      tabmenuCon.eq(itI).siblings().hide();
    });

    // var tabmenu02dl = $('.title_tab_style dl');
    // var tabmenu02btn = tabmenu02dl.find('dt');
    // var tabmenu02dd  = tabmenu02dl.find('dd');

    var titleTab = $('.title_tab_style');
    var titleTabDl = titleTab.children('dl');
    var titleTabDt = titleTabDl.children('dt');
    var titleTabDd = titleTabDl.children('dd');

    titleTabDt.on('click',['a'],function(e){
      e.preventDefault();

      var it = $(this);
      titleTabDd.hide();
      it.next('dd').show();

      it.siblings('dt').removeClass('action');
      it.addClass('action');
    });
})(jQuery);