// ex_02_slideBtnBanner_3.js

(function($){

  var slide03 = $('.indicator_horizontal_slide');
  var sli03Indicator = slide03.children('.indicator');
  var indiLi = sli03Indicator.children('li');

  var slide03Ul = slide03.find('.slide_wrap');
  var slide03Li = slide03Ul.children('li');

  slideNn = 0;

  indiLi.on('click',function(e){
    e.preventDefault();
    var its = $(this);
    slideNn = its.index();

    slide03Ul.stop().animate({'marginLeft': slideNn * -100+'%'});
    indiLi.eq(slideNn).siblings().removeClass('action');
    indiLi.eq(slideNn).addClass('action');

    console.log(slideNn);
  });

})(jQuery);