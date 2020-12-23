// ex_15_parallax02.css

(function($){

  var win = $(window);
  var winH = win.outerHeight();
  var headBox = $('#headBox');
  var frontImg = headBox.find('.front_img');
  var backImg = headBox.find('.back_img');
  var h1 = headBox.find('h1');

  var setN = 2.5;

  console.log(winH);

  // frontImg가 스크롤 될수록 커지도록(transform:scale())
      win.on('scroll',function(){
      var winSt = $(this).scrollTop();
      var per = winSt / winH ;
      var scaleR = 1+per;
      var opacityR = setN + 1 - per;
      // console.log(1 + per);

      console.log(winSt);
    if(winSt>=100){
      if(scaleR <= setN){
        frontImg.css({transform:'scale('+scaleR+')'});
      }else{
         //setN - per
        frontImg.css({opacity: opacityR});
      }

      // logo opacity = 0 => display:none;
      if(opacityR < 0){
        headBox.hide();
      }else{
        headBox.show();
      }
      // airplane
      var  airPer = (scaleR-setN) * 100;
      if(scaleR > setN){
        // console.log(airPer);
        backImg.css({backgroundPositionY: airPer +'%'})
      }else{
        // backImg.css({backgroundPositionY: -40 +'%'})
      }
    
      // logo
      var logoR = 0.7;
      var logoPer = (1 + logoR) -per;
      if( logoR <= per){
        h1.css({opacity: logoPer});
        headBox.addClass('default');
      }else{
        headBox.removeClass('default');
      }
    }
  }); 
    
})(jQuery);