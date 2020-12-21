// ex_14_parallax.js

(function($){

  var win = $(window);

  var viewBox = $('#viewBox');
  var viewBoxHeight = viewBox.outerHeight();
  var viewDiv = viewBox.children('div');

  var sampleBox = $('#sampleBox');
  var sampleUl = sampleBox.children('ul');
  var sampleList = sampleUl.children('li');
  var sampleBoxOffset = sampleBox.offset().top;

  win.on('scroll',function(e){
    e.preventDefault();

    var winSt = win.scrollTop();
    var setScroll = winSt / 100;
    // console.log(winSt);
    var i = 0;
    for(;i<viewDiv.length-1;i++){
      viewDiv.eq(i).css({bottom: -(setScroll*(10-i)*10)+'px'});
    }

    // viewDiv.eq(0).css({bottom: - (setScroll * 1.00)+'%'});
    // viewDiv.eq(1).css({bottom: - (setScroll * 0.85)+'%'});
    // viewDiv.eq(2).css({bottom: - (setScroll * 0.70)+'%'});
    // viewDiv.eq(3).css({bottom: - (setScroll * 0.62)+'%'});
    // viewDiv.eq(4).css({bottom: - (setScroll * 0.36)+'%'});
    // viewDiv.eq(5).css({bottom: - (setScroll * 0.17)+'%'});
    // viewDiv.eq(6).css({bottom: - (setScroll * 0.12)+'%'});
    // viewDiv.eq(7).css({bottom: - (setScroll * 0.03)+'%'});
    // viewDiv.eq(8).css({bottom: - (setScroll * 0.01)+'%'});

    // sampleBox image
    if( winSt+viewBoxHeight >= sampleBoxOffset){
      var winR = ((winSt+viewBoxHeight) - sampleBoxOffset) / viewBoxHeight * 100;
      console.log(winR);
      sampleList.css({backgroundPositionY: winR/2 + '%'});
    }
  });

})(jQuery);