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
                                    'indi':'indicator_01', 'indiLink':'indi_01'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_02', 'imgFile':'juice_big_02.jpg', 'imgFile02':'juice_small_02.jpg',
                                    'indi':'indicator_02', 'indiLink':'indi_02'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_03', 'imgFile':'juice_big_03.jpg', 'imgFile02':'juice_small_03.jpg',
                                    'indi':'indicator_03', 'indiLink':'indi_03'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_04', 'imgFile':'juice_big_04.jpg', 'imgFile02':'juice_small_04.jpg',
                                    'indi':'indicator_04', 'indiLink':'indi_04'}
                          },
                      {viewImgLi : 
                                  {'imgCaption':'view_img_05', 'imgFile':'juice_big_05.jpg', 'imgFile02':'juice_small_05.jpg',
                                    'indi':'indicator_05', 'indiLink':'indi_05'}
                          },
                    ]; // indicator, scrollBox 배열

  var Win = $(window); // 브라우저 선택자

  var headBox = $('#headBox'); // #headBox 선택
  var gnbList = '<li></li>'; // 삽입용 태그 작성 (li)
  var headUl = headBox.children('ul'); // #headBox > ul 선택
  var gnbMenuLen = gnbMenu.length; // headBox 에 들어갈 배열길이

  var viewBox = $('#viewBox'); // #viewBox 선택
  var viewImgUl = $('.view_area'); // .view_area 선택
  var viewImgLen = viewImgList.length; // viewImgList 배열길이
  var viewIndi = $('.view_indi'); // .view_indi 선택

  var scrollBox = $('#scrollBox'); // #scrollBox > ul 선택
  var scrollArea = scrollBox.children('.scroll_area'); // #scrollBox > ul 선택

  var url = '../../img/1116_modal/'; // 이미지 경로 설정용 변수

  var i, n, headLi, gnbM, indiLi, viewImgLi, scrollLi, k1 ; // 변수 사전정의

// 배열 html 삽입 ===================================

  for( i=0 ; i<gnbMenuLen ; i+=1){ // 
      headUl.append(gnbList); // headBox > ul에 gnbList 삽입
      headLi = headUl.children('li').eq(i); // i번째 headBox > ul > li 선택
      gnbM = gnbMenu[i].gnbNav; //  gnbMenu의 n번째 gnbNav 배열 선택
      headLi.append('<a href="'+ gnbM.navLink + '">'+gnbM.navName+'</a>'); // headBox > ul > li 안에 내용 삽입
  } // #headBox > ul

  for( n=0 ; n<viewImgLen  ; n+=1){
      viewIndi.append(gnbList); // view_indi 에 gnbList 삽입
      indiLi = viewIndi.children('li').eq(n); // n번째 view_indi > li 선택
      indiM = viewImgList[n].viewImgLi; // viewImgList의 n번째 viewImgLi 배열 선택
      indiLi.append('<a href="#"><span>'+indiM.indi+'</span></a>'); // view_indi > li 안에 내용 삽입

      viewImgUl.append(gnbList); // .view_area에 gnbList 삽입
      viewImgLi = viewImgUl.children('li').eq(n); // n번째 view_area > li 선택
       // viewImgLi.attr('id',indiM.indiLink);
      viewImgLi.append('<span class="hidden_context">'+indiM.imgCaption+'</span>'); // viewImgLi 안에 내용 삽입
      viewImgLi.css({'backgroundImage':'url("'+url+indiM.imgFile+'")'}); // viewImgLi에 배경이미지 css 삽입
  } // .view_indi, .view_area

  for ( nn=0 ; nn<viewImgLen ; nn+=1){
      scrollArea.append(gnbList); // .view_area에 scrollArea 삽입
      scrollLi = scrollArea.children('li').eq(nn); // nn번째 scrollArea > li 선택
      scrollLiM = viewImgList[nn].viewImgLi; // viewImgList의 nn번째 viewImgLi 배열 선택
      scrollLi.css({'backgroundImage':'url("'+url+scrollLiM.imgFile02+'")'});  // scrollLi에 배경이미지 css 삽입
  } // #scrollBox
  
// viewBox slide li 복제 ===================================

  var imgLiLast = viewImgLi.eq(-1).clone(); // viewImgLi의 마지막 li를 복제
  viewImgUl.prepend(imgLiLast); // 복제된 마지막 li를 li의 제일 앞에 삽입
  var reImgLi = viewImgUl.find('li'); // 복제된 li+기존 li 재확인

  viewImgUl.css({'left':-100+'%','width': 100 * reImgLi.length+'%'}); // 복제된li+기존li - ul width 재설정
  reImgLi.css({'width':100 / reImgLi.length+'%'}); // 복제된li+기존li - li width 재설정

// scrollBox slide li 복제 ===================================

  var scrLiLast = scrollLi.eq(-1).clone(); // viewImgLi의 마지막 li를 복제
  scrollArea.prepend(scrLiLast); // 복제된 마지막 li를 li의 제일 앞에 삽입
  var rescrLi = scrollArea.find('li'); // 복제된 li+기존 li 재확인

  scrollArea.css({'left':-100+'%','width': 100 * rescrLi.length +'%'}); // 복제된li+기존li - ul width 재설정
  rescrLi.css({'width': 100 / rescrLi.length +'%'}); // 복제된li+기존li - li width 재설정

// viewBox slide ==========================================================

  var nextBtn = viewIndi.find('.next_btn'); // 다음버튼 선택
  var prevBtn = viewIndi.find('.prev_btn'); // 이전버튼 선택

  var permission = true; // 빠른 시간 내 연속 입력 방지를 위한 사전정의

  viewIndi.children('li').eq(0).addClass('action'); // 첫번째 indiLi에 .action 부여

  var k = 0; // 변수 사전정의
  var timed = 300; // 시간 사전정의

  nextBtn.on('click', function(e){ // nextBtn 클릭 시 함수 동작
    e.preventDefault(); // 태그의 기본(기능) 해제
    if(permission){ // if에 따라 함수 동작
      permission = false; // 연속 입력 방지
      k += 1; // nextBtn 클릭 시 k+1
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){ // viewImgUl의 margin-left값 -100*k 이동
        if(k >= viewImgLen-1){ // k가 viewImgLen-1과 같을 시
          k = -1; // k를 -1로 설정
          viewImgUl.css({'marginLeft':k * -100+'%'}); // k값만큼 margin-left값 변경
        }
          setTimeout(function(){ // 클릭 동작 시간 제어
            permission = true; // 클릭 동작 허용
          }, timed/10); // timed/10 간격으로
          viewIndi.children('li').eq(k).siblings().removeClass('action'); // 선택되지 않은 viewIndi에서 .action 제거
          viewIndi.children('li').eq(k).addClass('action'); // 선택된 viewIndi에 .action 부여
      });
    }
  });
  prevBtn.on('click', function(e){ // prevBtn 클릭 시 함수 동작
    e.preventDefault(); // 태그의 기본(기능) 해제
    if(permission){ // if에 따라 함수 동작
      permission = false; // 연속 입력 방지
      k -= 1; // prevBtn 클릭 시 k-1
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){ // viewImgUl의 margin-left값 -100*k 이동
        if(k <= -1){ // k가 1과 같을 시
          k = viewImgLen-1; // k를 viewImgLen-1로 설정
          viewImgUl.css({'marginLeft': k*-100+'%'});// k값만큼 margin-left값 변경
        }
          setTimeout(function(){ // 클릭 동작 시간 제어
            permission = true; // 클릭 동작 허용
          }, timed/10); // timed/10 간격으로
          viewIndi.children('li').eq(k).siblings().removeClass('action'); // 선택되지 않은 viewIndi에서 .action 제거
          viewIndi.children('li').eq(k).addClass('action');  // 선택된 viewIndi에 .action 부여
      });
    }
  }); 
  
// indicator 클릭 시 li이동 ==============================================

indiLi = viewIndi.find('li'); // indiLi 재설정

indiLi.on('click', function(e){ // indiLi 클릭 시 함수 동작
  e.preventDefault(); // 태그의 기본(기능) 해제
  var itI = $(this); // 선택 된 대상
  k = itI.index()-2; // 대상의 순서 (보정을 위해 -2를 더함
  
  viewImgUl.stop().animate({'marginLeft': k * -100+'%'}); // k값만큼 margin-left값 변경
  indiLi.eq(k).siblings().removeClass('action'); // 선택되지 않은 viewIndi에서 .action 제거
  indiLi.eq(k).addClass('action'); // 선택된 viewIndi에 .action 부여
});

// viewBox 자동 슬라이드 =================================================

  var startInterval, stopInterval, startInterval2; // 변수 사전정의

  var SlideStart = function(){ // SlideStart 함수 설정
    startInterval = setInterval(function(){ // setInterval 함수
      k += 1; // 시간당 k+1
      viewImgUl.stop().animate({'marginLeft': k * -100+'%'},function(){ // k값만큼 margin-left값 변경
        if(k >= viewImgLen-1){ // k가 viewImgLen-1과 같을 시
          k = -1; // k를 -1로 설정
          viewImgUl.css({'marginLeft':k * -100+'%'}); // k값만큼 margin-left값 변경
        }
      });
      viewIndi.children('li').eq(k).siblings().removeClass('action'); // 선택되지 않은 viewIndi에서 .action 제거
      viewIndi.children('li').eq(k).addClass('action'); // 선택된 viewIndi에 .action 부여
    },timed*8); // timed*8 만큼의 시간 마다 동작
  }
  
  stopInterval = function(){ // stopInterval 함수 설정
    clearInterval(startInterval); // clearInterval 함수(setInterval 해제)
  }

  SlideStart(); // SlideStart 함수 동작

    viewImgUl.on({ // viewImgUli에 mouse 관련 동작 시
      'mouseenter' : stopInterval, // mouseenter시 stopInterval 동작
      'mouseleave' : SlideStart // mouseleave시 SlideStart 동작
    });

// scrollBox 자동 슬라이드 =======================================================================

  kk = 0; // 변수 설정
  var SlideStart2 = function(){ // SlideStart2 함수 설정
    startInterval2 = setInterval(function(){ // setInterval 함수
      kk += 1; // 시간당 kk+1
      scrollArea.stop().animate({'marginLeft': kk * -100+'%'},function(){ // kk값만큼 margin-left값 변경
        if(kk >= viewImgLen -1){ // kk가 viewImgLen-1과 같을 시
          kk = -1; // kk를 -1로 설정
          scrollArea.css({'marginLeft': kk * -100+'%'}); // kk값만큼 margin-left값 변경
        }
      });
    },timed*10); // timed*10 만큼의 시간 마다 동작
  }

  SlideStart2(); // SlideStart2 동작
 
// scroll ===============================================

var scrollTop = $('.scrollTop'); // scrollTop 선택
scrollTop.hide(); // scrollTop 화면에서 숨김(display:none)
var headOffset = headBox.offset().top; // headBox와 상단 사이의 간격

  Win.on('scroll',function(e){ // 브라우저에 스크롤 동작할때 함수 동작
    e.preventDefault() // 태그의 기본(기능) 해제
    var Winst = Win.scrollTop(); // scroll과 브라우저 최상단의 거리값
      if(Winst >= headOffset){ // headOffset 값보다 스크롤값이 크거나 같을 때
        headBox.css({'position':'fixed','zIndex':'1500','top':'0'}); // headBox의 css를 수정
      }else{// 그렇지 않을 경우
        headBox.removeAttr('style'); // 상기한 css를 적용하지 않음
      }
      if(Winst >= 300){ // 스크롤값이 300보다 크거나 같을때
        scrollTop.fadeIn(); // scrollTop이 나타남
      }else{// 그렇지 않을 경우
        scrollTop.fadeOut(); // scrollTop이 사라짐
      }
  });

  var scrollMove = function(e){ // scrollMove 함수 설정
    e.preventDefault(); // 태그의 기본(기능) 해제
    var its = $(this).children('button').find('a'); // 선택 된 대상의 button > a
    var itsAttr = its.attr('href') // a의 href 속성값 확인
    var itsOffset = $(itsAttr).offset().top; // a href=""의 상단 선택 (a href="#wrap"이므로 #wrap의 상단)

    $('html, body').animate({ scrollTop : itsOffset}); // itsOffset까지 스크롤 이동
  }

  scrollTop.on('click', scrollMove ); // scrollTop 클릭 시 scrollMove 동작

})(jQuery);