// 1104test_02.js

(function($){
  var miniPro = $('miniProduct');
  var indi = miniPro.children('.indicator');
  var btn = indi.children('button');

  var product = miniPro.children('.product');
  var proUl = product.children('ul')
  var proLi = proUl.children('li')

  var cloneProLi = proLi.eq(-1).clone(true);
  proUl.prepend(cloneProLi);
  var re_proLi = proUl.children('li');

  var permission = true;
  var timed = 300;

  slideN = 0;

  btn.on('click',function(e){
    e.preventDefault();
    if(permission === true){
      

    }//if(permission) End
  });

})(jQuery);