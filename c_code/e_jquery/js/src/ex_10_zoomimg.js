// ex_10_zoomImg.js

(function($){

  $.ajax({
    url:'../data/zoom_img.json',
    dataType:'json',
    context: document.body
  }).done(function(data){

    var imgData = data;
    var imgUrl = '../img/1210_zoom/';

    var viewArea = $('.view_area');
    var product = viewArea.children('.product');
    var viewLi = viewArea.find('li');
    var viewLink = viewLi.children('a');
    var scaleArea = $('.scale_area');

    var i = 0;
    var vLink, n; // 사전정의

    console.log(viewArea.imgData);

    for(;i< viewLi.length ;i+=1){
      vLink = viewLi.eq(i).children('a');
      vLink.css({'backgroundImage':'url('+imgUrl+imgData[i].thum+')'});
    }

    var setImg = function(n){ 
      var myN = n || 0;
      product.css({'backgroundImage':'url('+imgUrl+imgData[myN].detail+')'});
      scaleArea.css({'backgroundImage':'url('+imgUrl+imgData[myN].detail+')'});
    }

    setImg();

    // viewLink 클릭
    viewLink.on('click',function(e){
      e.preventDefault();
      var index = $(this).parent('li').index();
      setImg(index);
    });

    product.on('mouseenter',function(){
      scaleArea.stop().fadeIn();
    });
    product.on('mouseleave',function(){
      scaleArea.stop().fadeOut();
    });

    product.on('mousemove',function(e){
      e.preventDefault();
      var thisWidth = $(this).outerWidth();
      var thisHeight = $(this).outerHeight();
      var x = e.originalEvent.offsetX;
      var y = e.originalEvent.offsetY;

      var xPer = x/thisWidth * 100;
      var yPer = y/thisHeight * 100;

      scaleArea.css({'backgroundPosition':xPer+'%'+' '+yPer+'%'});
    });
    // clientX, screenX, offsetX, pageX
    // client   : 브라우저 크기를 기준(window)
    // page     : 전체 문서를 기준(document)
    // screen   : 화면크기를 기준(monitor)
    // offset   : 이벤트 대상을 기준

  });// ajax

})(jQuery);