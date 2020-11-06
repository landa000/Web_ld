// ex_01_accordion_test.js

(function($){

  var accor = $('.accor');
  var accDt = accor.children('dt');
  var accDd = accor.children('dd');

  accDt.on('click', ['a'], function(e){
    e.preventDefault();
    var it = $(this);
    var view = it.next('dd').css('display');
    if(view === 'none'){
      it.next('dd').show();
      it.siblings().next('dd').hide();
  
      it.css({'backgroundColor':'#047'});
      it.siblings('dt').css({'backgroundColor':'#067'});
      it.addClass('action');
      it.siblings('dt').removeClass('action');
  
    }else{
      it.next('dd').hide();
      it.css({'backgroundColor':'#067'});
      it.removeClass('action');
    } 
  });


})(jQuery);

/*
accDt.on('click', function(e){
  e.preventDefault();
  var it = $(this);
  var view = it.next('dd').css('display');
  if(view === 'none'){
    it.next('dd').show();
    it.siblings().next('dd').hide();

    it.css({'backgroundColor':'#047'});
    it.siblings('dt').css({'backgroundColor':'#067'});
    it.addClass('action');
    it.siblings('dt').removeClass('action');

  }else{
    it.next('dd').hide();
    it.css({'backgroundColor':'#067'});
    it.removeClass('action');
  } */