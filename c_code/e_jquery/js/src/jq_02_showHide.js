// jq_02_showHide.js

(function($){

  var box = $('.box');
  var boxPar = box.children('p');
  boxPar.animate({'borderRadius': 1 +'rem'});
  var timed = 400;
  
  var part = $('.part');
  var partUl = part.find('ul');

    var showHide = partUl.children('.show_hide');
    var fade = partUl.children('.fade');
    var slide = partUl.children('.slide');
    var className = partUl.children('.class_name');
    var other = partUl.children('.other');

  // test

    var testBox  = $('.test');
    var testDl   = testBox.children('dl');
    var testDt   = testBox.children('dt');
    var testDd   = testBox.children('dd');
    var testBtn  = testDt.find('button');

    testBtn.on('click', function(e){
      e.preventDefault();
      var its = $(this);
      testBtnI = its.parents(testDl).index();
      testDd.slideUp();
      its.parent().next(testDd).stop().slideDown(timed);
      // testBtn.eq(testBtnI).siblings().slideUp();
    });



  // showHide
  var shBtn = showHide.children('button');
  shBtn.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.stop().show(timed);
  });
  shBtn.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.stop().hide(timed);
  });
  shBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.stop().toggle(timed);
  });

  var fdBtn = fade.children('button');
  fdBtn.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.stop().fadeIn(timed);
  });
  fdBtn.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.stop().fadeOut(timed);
  });
  fdBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.stop().fadeToggle(timed);
  });

  var slideBtn = slide.children('button');
  slideBtn.eq(0).on('click', function(e){
    e.preventDefault();
    boxPar.stop().slideDown(timed);
  });
  slideBtn.eq(1).on('click', function(e){
    e.preventDefault();
    boxPar.stop().slideUp(timed);
  });
  slideBtn.eq(2).on('click', function(e){
    e.preventDefault();
    boxPar.stop().slideToggle(timed);
  });

  var CnBtn = className.children('button');
  CnBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.removeClass('view');
  });
  CnBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.addClass('view');
  });
  CnBtn.eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.toggle('view');
  });



})(jQuery);