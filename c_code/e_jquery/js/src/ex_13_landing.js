// ex_13_landing.js

(function($){

  var win = $(window);
  var conBox  = $('#conBox');
  var moreBox = $('#moreBox');
  var winH = win.outerHeight() / 3 * 2;

  var conBoxOffset  = conBox.offset().top;
  var moreBoxOffset = moreBox.offset().top;
  var conScroll;
  console.log(conBoxOffset, moreBoxOffset);

  // 스크롤값이, conBox의 offset().top 만큼(에서 브라우저 높이값 일부 빠진 만큼)보다 크면 수행
  win.on('scroll',function(e){
    var getScroll = win.scrollTop();
    if(getScroll >= conBoxOffset-winH){
      conBox.addClass('action');
      conScroll = getScroll - (conBoxOffset-winH);
      conBox.css({'backgroundPositionY':-(conScroll/2)+'px'});
    }else{
      conBox.removeClass('action');
    }

  // moreBox의 offset().top 만큼(에서 브라우저 높이값 일부 빠진 만큼)보다 크면 수행
  // 더 값이 커졌을때 moreBox offset()값이 화면의 상단에 위치하면 수행
  // 조건문에선 앞의 기능이 참이면 뒤의 값은 전혀 수행하지않는다.
  // 역순으로 걸어야 제대로 작동한다.
    if(getScroll >= moreBoxOffset){
      moreBox.removeClass('action');
      moreBox.addClass('more');
    }
    if(getScroll >= moreBoxOffset-winH){
      moreBox.addClass('action');
    }else{
      moreBox.removeClass('action');
      moreBox.removeClass('more');
    }
  });
})(jQuery);