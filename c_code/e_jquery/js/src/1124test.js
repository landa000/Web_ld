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
              ];

  var viewImgList = [
                      {viewImgLi : 
                                  {'imgCaption':'view_img_01', 'imgFile':'juice_big_01.jpg',
                                    'indi':'indicator_01'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_02', 'imgFile':'juice_big_02.jpg',
                                    'indi':'indicator_02'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_03', 'imgFile':'juice_big_03.jpg',
                                    'indi':'indicator_03'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_04', 'imgFile':'juice_big_04.jpg',
                                    'indi':'indicator_04'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_05', 'imgFile':'juice_big_05.jpg',
                                    'indi':'indicator_05'}
                          },
                    ];

  var headBox = $('#headBox');
  var gnbList = '<li></li>';
  var headUl = headBox.children('ul');
  var gnbMenuLen = gnbMenu.length;

  var viewBox = $('#viewBox');
  var viewImgUl = $('.view_area');
  var viewImgLen = viewImgList.length;
  var viewIndi = $('.view_indi');

  var url = '../../img/1116_modal/';

  var i, n, headLi, gnbM, indiLi, viewImgLi, viewImgaArr;

  for( i=0 ; i<gnbMenuLen ; i+=1){
      headUl.append(gnbList)
      headLi = headUl.children('li').eq(i);
      gnbM = gnbMenu[i].gnbNav;
      headLi.append('<a href="'+ gnbM.navLink + '">'+gnbM.navName+'</a>');
  }
  for( n=0 ; n<viewImgLen  ; n+=1){
      viewIndi.append(gnbList)
      indiLi = viewIndi.children('li').eq(n);
      indiM = viewImgList[n].viewImgLi;
      indiLi.append('<a href="'+'#'+'"><span>'+indiM.indi+'</span></a>');

      viewImgUl.append(gnbList);
      viewImgLi = viewImgUl.children('li').eq(n);
      viewImgLi.css({'backgroundImage':'url("'+url+indiM.imgFile+'")'});
  }

  var imgLiLast = viewImgLi.eq(-1).clone();
  viewImgUl.prepend(imgLiLast);
  var reImgLi = viewImgUl.find('li');
  console.log(reImgLi.length);
  viewImgUl.css({'marginLeft':-100+'%','width': 100 * reImgLi.length+'%'});
  viewImgLi.css({'width':100 / reImgLi.length+'%'});

// ==========================================================

  var nextBtn = viewIndi.find('.next_btn');
  var prevBtn = viewIndi.find('.prev_btn');
  var k = 0;

  var viewImgLi = viewImgUl.children('li');
  var permission = true;

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      k += 1;
      viewImgUl.stop().animate({'left': k * -100+'%'},function(){
        if(k >= reImgLi.length-1){
          k = -1;
          viewImgUl.css({'left':k*-100+'%'});
        }
          setTimeout(function(){
            permission = true;
          }, 100);
        console.log(k);
      });
    }
  });
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      k -= 1;
      viewImgUl.stop().animate({'left': k * -100+'%'},function(){
        if(k <= -1 ){
          k = reImgLi.length-1;
          viewImgUl.css({'left':k*-100+'%'});
        }
          setTimeout(function(){
            permission = true;
          }, 100);
      });
    }
  });

})(jQuery);