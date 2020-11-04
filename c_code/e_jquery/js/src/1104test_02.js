// 1104test_02.js

(function($){
  var miniProduct = $('.miniProduct');
  var product = miniProduct.find('.product');
  var imgLi = product.find('li');
  console.log(imgLi.length);

  var slideIndi = miniProduct.find('.indicator');
  var slideBtn = slideIndi.find('button');

  var imgLiLast = imgLi.eq(-1).clone();
  imgLi.prepend(imgLiLast);
  var reImgLi = imgLi.find('li');
  console.log(reImgLi.length);

  var nextSliBtn = slideBtn.children('button').eq(0);
  var prevSliBtn = slideBtn.children('button').eq(1);

  var slideN = 0;
})(jQuery);