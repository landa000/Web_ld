// ex_03_modal_window.js

(function($){

  var data = [
    { "title":"juice_01", 
      "thumImg":"juice_small_01.jpg", 
      "bigImg":"juice_big_01.jpg",
      "caption":"img_01 drink sale 50% off"
    },
    { "title":"juice_02", 
      "thumImg":"juice_small_02.jpg", 
      "bigImg":"juice_big_02.jpg",
      "caption":"img_02 drink sale 50% off"
    },
    { "title":"juice_03", 
      "thumImg":"juice_small_03.jpg", 
      "bigImg":"juice_big_03.jpg",
      "caption":"img_03 drink sale 50% off"
    },
    { "title":"juice_04", 
      "thumImg":"juice_small_04.jpg", 
      "bigImg":"juice_big_04.jpg",
      "caption":"img_04 drink sale 50% off"
    },
    { "title":"juice_05", 
      "thumImg":"juice_small_05.jpg", 
      "bigImg":"juice_big_05.jpg",
      "caption":"img_05 drink sale 50% off"
    }
  ];
// ========================================================== 

  var modalInCode = '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"></button></div><div class="big_img"><p>narration</p></div></div></div>';
  var url = '../img/1116_modal/';

  var modal01 = $('.modal_01');
  modal01.after(galleryCode); // append 내부의 후측, after는 바로 후측

  var modalUl = modal01.children('ul');
  var modalLi;
  var i = 0;
  modalUl.empty();// 선택자 내부를 지움
  var mdBtn; //
  var temLi; //

  for( ; i<data.length ; i+=1){ 
      modalUl.append(modalInCode);
      modalLi = modalUl.find('li').eq(i);
      temLi = modalUl.children('li').eq(-1); // 뒤에서 부터 하나씩 생성
      temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].caption}); // 

      mdBtn = modalUl.children().eq(-1).find('button'); // // 왜 eq -1이지...?
      mdBtn.css({'backgroundImage':'url('+url+data[i].thumImg+')'});
      mdBtn.children('span').text(data[i].caption);
      // modalLi.find('button').css({'backgroundImage':'url('+url+data[i].thumImg+')'});
      // modalLi.find('span').text(data[i].caption);
    }
  var modalBtn = modalUl.find('button');

  var indexCheck;//
  var timed = 500;

  var galleryBox = $('.gallery_box');
  var galleryArea = galleryBox.find('.gallery_area');
  var galleryClose = galleryArea.find('.close');
  var img = galleryBox.find('.big_img');
  var narr = img.find('p');

  modalBtn.on('click',function(e){
    e.preventDefault();
    var it = $(this).parent('li') // +풀이
    var itI = it.index();//
    indexCheck = itI; //
    var dd = it.attr('data-big');
    var dn = it.attr('data-narr');

    galleryBox.stop().fadeIn(function(){//
      galleryClose.children('button').focus();//
      setTimeout(function(){
        narr.addClass('action')
      },timed/2);
        });
        galleryArea.css({'width':'25'+'rem', 'height':'40'+'rem','padding':'0'}); 
        narr.text(dn); 
        img.css({'backgroundImage':'url('+ url + dd +')'});
      });
    galleryClose.children('button').on('click',function(e){
      e.preventDefault();
      galleryBox.fadeOut();
      modalLi.eq(indexCheck).find('button').focus();//
      narr.removeClass('action')//
    });

  // img.on('click',function(){
  //     var n=1;
  //   n+=1
  //   img.css({'backgroundImage':'url('+url+'juice_big_0'+n+'.jpg'+')'});
  //   if(n>=5){
  //     n=0;
  //   }
  // });
})(jQuery);

// 