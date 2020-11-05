// 1104test_03.css

(function($){
  var miniProduct = $('.miniProduct');
  var product     = miniProduct.find('.product');
  var imgLi       = product.find('li');

  var permission = true;

  var slideBtn     = miniProduct.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0);
  var prevSlideBtn = slideBtn.children('button').eq(1);

  var slideIndi = miniProduct.find('.indicator');
  var indiLi    = slideIndi.find('li');

  var backImgLi = imgLi.eq(-1).clone();
  product.prepend(backImgLi);
  var reImgLi = product.find('li');
  console.log(reImgLi.length);

  product.css({ 'marginLeft' : -100 +'%','width' : (reImgLi.length * 100)+'%'});
  reImgLi.css( {'width' : (100 / reImgLi.length)+'%'});


  //

  var slideN=0;

  nextSlideBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
      permission = false; 

      slideN += 1;
      product.stop().animate({'left': slideN * -100+'%'}, function(){
        if(slideN >= imgLi.length -1){
          slideN = -1;
          product.stop().css({'left': slideN * -100+'%'});
        }
        setTimeout(function(){
          permission=true;
        }, 200);
        indiLi.eq(slideN).siblings().removeClass('action');
        indiLi.eq(slideN).addClass('action');
      });
    }
  });

  prevSlideBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
        permission = false;
        slideN -= 1;
    
        product.stop().animate({'left':slideN * -100+'%'},function(){
        if(slideN <= -1 ){
          slideN = imgLi.length-1;
          product.stop().css({'left':slideN*-100+'%'});
        }
        setTimeout(function(){
          permission=true;
       },200);
        indiLi.eq(slideN).siblings().removeClass('action');
        indiLi.eq(slideN).addClass('action');
      });
    }
  });

  indiLi.on('click',function(e){
    e.preventDefault();
    var its = $(this);
    slideN = its.index();

    product.stop().animate({'left':slideN * -100+'%'});
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  })



})(jQuery);