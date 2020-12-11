// ex_12_mouseMove02.js

(function($){

  var part = $('.part');
  var partOffsetX = part.offset().left;
  var partW = part.width();
  var per = 303;

  // .part 내부에 img 생성하고 주소값을 연결

  var i = 0, k;
  var fn = '../img/1211/moveImg_';

  for(;i<per;i++){
    if(i<9){
      k = '00'+(i+1);
    }else if(i<99){
      k = '0'+(i+1);
    }else{
      k = (i+1)
    }
    part.append('<img src="'+fn+k+'.png" alt="마우스가 움직이면 나타나는 이미지" />');
  }

  var partImg = part.children('img');
  partImg.hide();
  partImg.eq(0).show();

  part.on('mousemove',function(e){
    e.preventDefault();
    var x   = e.originalEvent.pageX;
    var myX = x - partOffsetX;
    var mySetPer = parseInt(myX / partW * per);
    // console.log(mySetPer);
    partImg.eq(mySetPer).show();
    partImg.eq(mySetPer).siblings('img').hide();
  });

})(jQuery);