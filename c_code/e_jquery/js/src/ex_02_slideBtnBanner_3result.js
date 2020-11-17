

(function($){
  
  var indiSlide = $('.indicator_horizontal_slide');
  var indicator = indiSlide.find('.indicator');
  var indiLi    = indicator.children('li');
  
  var slideWrap = indiSlide.find('.slide_wrap');
  var slideUl   = slideWrap.children('ul');
  var slideLi   = slideUl.children('li');
  var slideLiLink = slideLi.children('a');

  var permission = true;
  var indiSlN   = 0;
  var timed     = 500;

  slideLiLink.attr({'tabIndex':'-1'});
  /*
  var typeTest = function(evt){
    // console.log(evt.type);
    // switch(evt){
    //   case 'focus':
    //   case 'click':
    //     console.log('f'); 아래는 if문 방식
    if(permission && evt.type === 'focus'){
      permission = false;
      console.log('focused');
    }else if(permission && evt.type === 'click'){
      permission = false;
      console.log('clicked');
    }else {
      console.log('...')
    }
  };
*/
// slide_wrap 내부 a focus 기능 강제 비활성화

// indicator 클릭시 ul 이동 -> a에 focus 처리로 변경 'click'->'focus'
// 클릭기능은 보류
  indiLi.children('a').on('mouseenter focus click', function(e){// Tab 포커스 먹게하기
    e.preventDefault();

      var it = $(this);
      indiSlN = it.parent('li').index();// 한단계 위 부모이므로 단수형  
      indiLi.eq(indiSlN).addClass('action')
      indiLi.eq(indiSlN).siblings().removeClass('action');
      // slideUl.stop().css({'marginLeft': indiSlN * -100+'%'});
      if(e.type === 'focus' || e.type === 'mouseenter'){
        slideUl.stop().animate({'marginLeft': indiSlN * -100+'%'}, timed/2);
      }else if(e.type = 'click'){
        setTimeout(function(){
          var thatLink = it.attr('href');
          $(thatLink).attr({'tabIndex':0});
          // $(thatLink).parent('li').siblings().children('a').attr({'tabIndex': -1});
          slideLi.eq(indiSlN).siblings().children('a').attr({'tabIndex':-1}); // 선택 외 대상의 탭인덱스 -1
          $(thatLink).focus();//링크로 찾아가 포커스를 걸어라
        },timed + 4)
      }
  });// indiLi.children('a').on('focus') end  

  slideLi.find('a').on('blur',function(){
    $(this).attr({'tabIndex':-1});
  })

  // click 
  /*
  indiLi.on('click', function(e){
    e.preventDefault();

    typeTest(e);

    var it = $(this);
    indiSlN = it.index();
    var propertyLink = it.children('a').attr('href');
    var thatPosition = $(propertyLink);

    indiLi.eq(indiSlN).addClass('action')
    indiLi.eq(indiSlN).siblings().removeClass('action');
    slideUl.stop().css({'marginLeft': indiSlN * -100+'%'});

    thatPosition.attr({'tabIndex':'0'});
    thatPosition.focus();
  }); 
  */
 

    // indiLi.on('click', function(e){// Tab 포커스 먹게하기
//   e.preventDefault();
//   if(permission){
//     permission = false;
//     var it = $(this);
//     indiSlN = it.index(); 
//     slideUl.stop().animate({'marginLeft': indiSlN * -100+'%'},function(){
//       indiLi.eq(indiSlN).addClass('action')
//       indiLi.eq(indiSlN).siblings().removeClass('action');

//       setTimeout(function(){
//         permission = true;
//       },timed/5);
//     });
//   }//if(permission) end
// });



// // focus
//   indiLi.children('a').on('focus', function(e){// Tab 포커스 먹게하기
//     e.preventDefault();
//     if(permission){
//       permission = false;
//       var it = $(this);
//       indiSlN = it.parent('li').index();// 한단계 위 부모이므로 단수형
//       slideUl.stop().animate({'marginLeft': indiSlN * -100+'%'},function(){
//         indiLi.eq(indiSlN).addClass('action')
//         indiLi.eq(indiSlN).siblings().removeClass('action');

//         setTimeout(function(){
//           permission = true;
//         },timed/10);
//       });
//     }//if(permission) end
//   });// indiLi.children('a').on('focus') end


//   // click
//   indiLi.on('click', function(e){
//     e.preventDefault();
//     var it = $(this);
//     var propertyLink = it.children('a').attr('href');
//     // console.log(propertyLink);
//     var thatPosition = $(propertyLink);
//     thatPosition.attr({'tabIndex':'0'});
//     thatPosition.focus();
//   }); 

})(jQuery);
