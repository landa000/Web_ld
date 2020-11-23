// rwd_menu_mobile.js

(function($){
  var headBox = $('#headBox');
  var menuBtn = headBox.find('.menu_btn');
  var gnb = headBox.find('.gnb');

  menuBtn.on('click',['button'], function(e){
    e.preventDefault();
    // gnb.stop().fadeToggle(); // 아이콘 변경이 어려움

    var gnbStatus = gnb.css('display');

    if(gnbStatus === 'none'){
      gnb.stop().fadeIn();
      menuBtn.addClass('on');
    }else{
      gnb.stop().fadeOut();
      menuBtn.removeClass('on');
    }
  });

})(jQuery);