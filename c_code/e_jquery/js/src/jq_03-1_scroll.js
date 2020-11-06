// jq_03-1_scroll.js

(function($){
  var win = $(window);
  var wrap = $('#wrap');
  // wrap.height(2000);
  wrap.css({'height': 3000+'px','backgroundImage':'linear-gradient(45deg,#aa9,#fca'});

  /* offset().top, offser().left  => 브라우저기준 0,0 좌표에서부터 
  선택자가 얼마나 떨어져있는지 판단하는 기능 */

  var fix = $('.fix');
  var offsetTop = fix.offset().top;
  console.log( offsetTop );

  win.on('scroll',function(){
    var st = win.scrollTop(); // scroll이 얼마나 이동했는가
    if(offsetTop <= st){
      fix.css({'position':'fixed'});
    }else{
      // fix.css({'position':'relative'});
      fix.removeAttr('style');
    }
  })
})(jQuery);