// ex_01_accordion.js

(function($){

  var part_01 = $('.part').eq(0);
  var accor_01 = part_01.children('.accordion_01');
  var accor_01Dl = accor_01.children('dl');
  var accor_01Dt = accor_01Dl.children('dt');

  accor_01Dt.on('click',['button'],function(e){ // []로 dt 내 버튼 명확하게 선택
    e.preventDefault();
    var it = $(this); // dt중 클릭된 it
    it.siblings('dd').stop().slideToggle(); // stop(true,false)

    var itDdDisplay = it.siblings('dd').eq(0).css('display'); // it의 첫번째 dd상태 확인
    // console.log(itDdDisplay);
    if( itDdDisplay === 'block'){
      it.addClass('action');
      it.parent('dl').stop().siblings().children('dt').removeClass('action'); // 다른 dt의 클래스 제거
    }else if( itDdDisplay === 'none'){
      it.removeClass('action');
    }

    it.parent('dl').stop().siblings().children('dd').slideUp();
  });

})(jQuery);