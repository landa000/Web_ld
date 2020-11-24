// 1124test.js

(function($){
  var gnbMenu =     [
                      {'gnbNav':
                              {'navName':'menu1','navLink':'#'}
                        },
                      {'gnbNav':
                              {'navName':'menu2','navLink':'#'}
                        },
                      {'gnbNav':
                              {'navName':'menu3','navLink':'#'}
                        },
                      {'gnbNav':
                              {'navName':'menu4','navLink':'#'}
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
  var viewImgLen = viewImgList.length;
  var viewIndi = $('.view_indi');


  var i, n, headLi, gnbM, indiLi;

  for( i=0 ; i<gnbMenuLen ; i+=1){
      headUl.append(gnbList)
      headLi = headUl.children('li').eq(i);
      gnbM = gnbMenu[i].gnbNav;
      headLi.append('<a href="'+ gnbM.navLink + '">'+gnbM.navName+'</a>');
      console.log(i);
  }
  for( n=0 ; n<viewImgLen  ; n+=1){
      viewIndi.append(gnbList)
      indiLi = viewIndi.children('li').eq(n);
      indiM = viewImgList[n].viewImgLi;
      indiLi.append('<a href="'+'#'+'"><span>'+indiM.indi+'</span></a>');
      console.log(n);
  }


})(jQuery);