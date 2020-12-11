// ex_11_mouseMove01.js

(function($){

  var wrap  = $('#wrap');
  var chara = wrap.find('.character');

  wrap.on('mouseenter',function(){
    chara.fadeIn();
  });
  wrap.on('mouseleave',function(){
    chara.fadeOut();
  });


  wrap.on('mousemove', function(e){
    e.preventDefault();

    var eOrigin = e.originalEvent;

    var w = $(this).outerWidth() /2;
    var h = $(this).outerHeight() /2;
    // 가로,세로 값
    // 지정 위치에서 특정 값 파악
    var offX = $(this).offset().left;
    var offY = $(this).offset().top;

    var x = eOrigin.pageX;
    var y = eOrigin.pageY;
    // x,y 좌표
    // offset값 사용시, 내부요소와 겹침 현상이 발생하여 위치값이 변경되므로,
    // 문서크기의 위치(page)를 기준으로 좌표를 생성, 그러므로 외부오차값을 위해 offset()메서드 사용

    // console.log(w-(x-offX),h-(y-offY));

    var setX = w-(x-offX);
    var setY = h-(y-offY);
    // 좌표 0,0을 캐릭터 중앙으로 잡기 위한 값
    // 전체 길이 - (문서좌측상단에서 떨어진 값 - 담긴 요소 크기/2)

    chara.css({'transform':'translate('+ -setX/1.5 +'px,'+ -setY/1.5 +'px)'});

  });
}(jQuery));