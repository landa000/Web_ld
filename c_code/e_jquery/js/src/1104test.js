// 1104test.js

(function($){
  var miniProduct = $('.miniProduct');
  var product = miniProduct.find('.product');
  miniProduct.css({'overflow': 'hidden'})
  var permission = true;

  var slideIndicator = miniProduct.find('.indicator');
  var indiLi = slideIndicator.find('li');

  // console.log(productLi.length);
  // console.log(indiLi.length);

  var productLi = product.find('li');
  console.log(productLi.length);

  product.css({'width':(productLi.length)*100+'%'});
  productLi.css({'width':(100 / productLi.length)+'%'});

  var slideN = 0;

  indiLi.on('click',function(e){
    e.preventDefault()
    slideN += 1;
    var its = $(this);
    slideN = its.index();
    
    product.stop().animate({'left':slideN * -100+'%'}, function(){
      if(slideN >= productLi.length ){
        slideN = 0;
        product.stop().css({'left': slideN * -100 + '%'});
      }
      setTimeout(function(){
        permission = true;
      },200);
    });
  });
})(jQuery);