// 1124test.js

(function($){
  var gnbMenu =     [
                      {'gnbNav': {'navName':'menu1','navLink':'#'}
                    },
                      {'gnbNav': {'navName':'menu2','navLink':'#'}
                    },
                      {'gnbNav': {'navName':'menu3','navLink':'#'}
                    },
                      {'gnbNav': {'navName':'menu4','navLink':'#'}
                    }
              ]; // menu 배열

  var viewImgList = [
                      {viewImgLi : 
                                  {'imgCaption':'view_img_01', 'imgFile':'juice_big_01.jpg', 'imgFile02':'juice_small_01.jpg',
                                    'indi':'indicator_01'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_02', 'imgFile':'juice_big_02.jpg', 'imgFile02':'juice_small_02.jpg',
                                    'indi':'indicator_02'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_03', 'imgFile':'juice_big_03.jpg', 'imgFile02':'juice_small_03.jpg',
                                    'indi':'indicator_03'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_04', 'imgFile':'juice_big_04.jpg', 'imgFile02':'juice_small_04.jpg',
                                    'indi':'indicator_04'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_05', 'imgFile':'juice_big_05.jpg', 'imgFile02':'juice_small_05.jpg',
                                    'indi':'indicator_05'}
                          },
                    ]; // indicator, scrollBox 배열

  var Win = $(window); // 브라우저 선택자

  var headBox = $('#headBox');
  var gnbList = '<li></li>';
  var headUl = headBox.children('ul');
  var gnbMenuLen = gnbMenu.length; // headBox 에 들어갈 배열 사전정의

  var viewBox = $('#viewBox');
  var viewImgUl = $('.view_area');
  var viewImgLen = viewImgList.length;
  var viewIndi = $('.view_indi');

  var scrollBox = $('#scrollBox ul');

  var url = '../../img/1116_modal/';

  var i, n, headLi, gnbM, indiLi, viewImgLi, scrollLi, k1 ;

  for( i=0 ; i<gnbMenuLen ; i+=1){
      headUl.append(gnbList);
      headLi = headUl.children('li').eq(i);
      gnbM = gnbMenu[i].gnbNav;
      headLi.append('<a href="'+ gnbM.navLink + '">'+gnbM.navName+'</a>');
  } // #headBox > ul

  for( n=0 ; n<viewImgLen  ; n+=1){
      viewIndi.append(gnbList);
      indiLi = viewIndi.children('li').eq(n);
      indiM = viewImgList[n].viewImgLi;
      indiLi.append('<a href="'+'#'+'"><span>'+indiM.indi+'</span></a>'); 

      viewImgUl.append(gnbList);
      viewImgLi = viewImgUl.children('li').eq(n);
      viewImgLi.css({'backgroundImage':'url("'+url+indiM.imgFile+'")'});
  } // .view_indi, .view_area

  for ( nn=0 ; nn<viewImgLen ; nn+=1){
      scrollBox.append(gnbList);
      scrollLi = scrollBox.children('li').eq(nn);
      scrollLiM = viewImgList[nn].viewImgLi;
      scrollLi.css({'backgroundImage':'url("'+url+scrollLiM.imgFile02+'")'});
  } // #scrollBox
  
  // 배열 html 삽입 ===================================

  var imgLiLast = viewImgLi.eq(-1).clone();
  viewImgUl.prepend(imgLiLast);
  var reImgLi = viewImgUl.find('li');

  viewImgUl.css({'left':-100+'%','width': 100 * reImgLi.length+'%'});
  reImgLi.css({'width':100 / reImgLi.length+'%'});

// viewBox slide ==========================================================

  var nextBtn = viewIndi.find('.next_btn');
  var prevBtn = viewIndi.find('.prev_btn');


  var viewImgLi = viewImgUl.children('li');
  var permission = true;

  viewIndi.children('li').eq(0).addClass('action');

  var k = 0;
  var timed = 300;

  nextBtn.on('click', function(e){
    e.preventDefault();

    if(permission){
      permission = false;
      k += 1;
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){
        if(k >= viewImgLen-1){
          k = -1;
          viewImgUl.css({'marginLeft':k * -100+'%'});
        }
          setTimeout(function(){
            permission = true;
          }, timed/6);
          viewIndi.children('li').eq(k).siblings().removeClass('action');
          viewIndi.children('li').eq(k).addClass('action');
      });
    }
  });
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      k -= 1;
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){
        if(k <= -1){
          k = viewImgLen-1;
          viewImgUl.css({'marginLeft': k*-100+'%'});
        }
          setTimeout(function(){
            permission = true;
          }, timed/6);
          viewIndi.children('li').eq(k).siblings().removeClass('action');
          viewIndi.children('li').eq(k).addClass('action');
      });
    }
  }); 
  
// indicator 클릭 시 li이동 ==============================================

// indiLi = viewIndi.children('li').children('a');

// indiLi.on('click', function(e){
//   e.preventDefault();
//   var itI = $(this);
//   k = itI.parent('li').index();
//     console.log(itI);
  
//   viewImgUl.stop().animate({'marginLeft': k * -100+'%'});
//   viewIndi.children('li').eq(k).siblings().removeClass('action');
//   viewIndi.children('li').eq(k).addClass('action');
// });

// viewBox 자동 슬라이드 =================================================

  var startInterval, stopInterval, startInterval2, stopInterval2;

  console.log(viewImgLen);
  var SlideStart = function(){
    startInterval = setInterval(function(){
      k += 1;
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){
        if(k >= viewImgLen-1){
          k = -1;
          viewImgUl.css({'marginLeft':k * -100+'%'});
        }
      });
      viewIndi.children('li').eq(k).siblings().removeClass('action');
      viewIndi.children('li').eq(k).addClass('action');
    },timed*8);
  }
  
  stopInterval = function(){
    clearInterval(startInterval);
  }

  viewImgUl.on({
    'mouseenter' : stopInterval,
    'mouseleave' : SlideStart
  });

  SlideStart();

// =======================================================================

  var kk = 0;
  var SlideStart2 = function(){
    startInterval2 = setInterval(function(){
      kk += 1;
      scrollBox.stop().animate({'marginLeft': kk * -100+'%'},function(){
        if(kk >= viewImgLen-1){
          kk = -1;
          scrollBox.css({'marginLeft':kk * -100+'%'});
        }
      });
    },timed*20);
  }

  SlideStart2();


  stopInterval2 = function(){
    clearInterval(startInterval2);
  }

  scrollBox.on({
    'mouseenter' : stopInterval2,
    'mouseleave' : SlideStart2
  });
 
// slide animate ===============================================

var scrollTop = $('.scrollTop');
scrollTop.hide();
var headOffset = headBox.offset().top;

console.log(headOffset);

  Win.on('scroll',function(e){
    e.preventDefault()
    var Winst = Win.scrollTop();
      if(Winst >= headOffset){
        headBox.css({'position':'fixed','zIndex':'1500','top':'0'});
      }else{
        headBox.removeAttr('style');
      }
      if(Winst >= 300){
        scrollTop.fadeIn();
      }else{
        scrollTop.fadeOut();
      }
  });

  var scrollMove = function(e){
    e.preventDefault();
    var its = $(this).children('button').find('a');
    var itsAttr = its.attr('href')
    var itsOffset = $(itsAttr).offset().top;

    $('html, body').animate({ scrollTop : itsOffset});
  }

  scrollTop.on('click', scrollMove );

})(jQuery);