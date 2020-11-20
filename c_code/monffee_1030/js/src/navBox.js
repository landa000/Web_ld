// navBox.js

(function($){
  // =============================================
  //  navigation 내용 삽입 형식 설정

// var navBox = [
//   {'titleNav' : { tname:'story', 'tlink':'http://naver.com','target':'_blank'},
//     'subNav' : ['몽피이야기','회사소개','후원']},
//   {'titleNav' : { tname:'menu', 'tlink':'http://naver.com','target':'blank'},
//     'subNav' : ['커피류','기타음료','음식 및 디저트','상품','선물세트','기타']},
//   {'titleNav' : { tname:'store', 'tlink':'http://naver.com','target':'blank'},
//     'subNav' : ['신규매장','매장찾기','가맹문의','창업설명회','창업스토리']},
//   {'titleNav' : { tname:'news', 'tlink':'http://naver.com','target':'blank'},
//     'subNav' : ['이벤트','공지사항','프로모션','미디어 광고']}
//   ];

  var navBox = [
    {'titleNav' : { tname:'story', 'tlink':'http://naver.com','target':'_blank'},
      'subNav' : [{'subname':'몽피이야기', 'slink':'http://google.com'},
                  {'subname':'회사소개', 'slink':'http://google.com'},
                  {'subname':'후원', 'slink':'http://google.com'}]
                },
    {'titleNav' : { tname:'menu', 'tlink':'http://naver.com','target':'blank'},
      'subNav' : [{ 'subname' : '커피류', 'slink':'http://daum.net'},
                  { 'subname' : '기타음료', 'slink':'http://daum.net'},
                  { 'subname' : '음식 및 디저트', 'slink':'http://daum.net'},
                  { 'subname' : '상품', 'slink':'http://daum.net'},
                  { 'subname' : '선물세트', 'slink':'http://daum.net'},
                  { 'subname' : '기타', 'slink':'http://daum.net'}]
                },
    {'titleNav' : { tname:'store', 'tlink':'http://naver.com','target':'blank'},
      'subNav' : [{'subname' : '신규매장', 'slink' : 'http://google.com'},
                  {'subname' : '매장찾기', 'slink' : 'http://google.com'},
                  {'subname' : '가맹문의', 'slink' : 'http://google.com'},
                  {'subname' : '창업설명회', 'slink' : 'http://google.com'},
                  {'subname' : '창업스토리', 'slink' : 'http://google.com'}]
                },
    {'titleNav' : { tname:'news', 'tlink':'http://naver.com','target':'blank'},
      'subNav' : [{ 'subname' : '이벤트', 'slink' : 'http://naver.com'},
                  { 'subname' : '공지사항', 'slink' : 'http://naver.com'},
                  { 'subname' : '프로모션', 'slink' : 'http://naver.com'},
                  { 'subname' : '미디어 광고', 'slink' : 'http://naver.com'}]
                }
    ];


  // =============================================
  // #navBox 내부에 각각의 요소내용 삽입
  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';

  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j, tNav, sNav;
  for(i=0; i<navLen; i+=1){
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    
    tNav = navBox[i].titleNav;
    // navDt.append('<a href="'+ tNav.tlink +'"target="'+ tNav.target + '">' + tNav.tname  +'</a>'); //ie까지 호환
    navDt.append(`<a href="${tNav.tlink}"${tNav.target}>${tNav.tname}</a>`); //ES6

    subNavLen=navBox[i].subNav.length;
    for( j=0 ; j<subNavLen ;j+=1){
      navDd = navBoxSelUl.children('li').eq(i).find('dd');
      sNav = navBox[i].subNav[j];
      navDd.append('<a href="'+ sNav.slink +'">' + sNav.subname +'</a>');
    }
  };
  // =============================================================
  var navBoxFindDt = navBoxSel.find('dt');
  var navBoxFindDtLink = navBoxFindDt.find('a');
  var navBoxFindDd = navBoxSel.find('dd');
  var navBoxFindDdLink = navBoxFindDd.find('a');
  navBoxFindDd.hide();

  // navBoxSelUl.addEventListener('mouseenter',function(){});

  var navSlideDown = function(){ navBoxFindDd.stop().slideDown();};
  var navSlideUp = function(){ navBoxFindDd.stop().slideUp();};
  navBoxSelUl.on({
    'mouseenter' : navSlideDown, 
    'mouseleave' : navSlideUp
      });

  // navBoxSelUl.on('mouseenter',navSlideDown);
  // navBoxSelUl.on('mouseleave',navSlideUp);
  navBoxFindDtLink.on('focus', navSlideDown);
  navBoxFindDdLink.eq(-1).on('blur',navSlideUp);

})(jQuery);

// * 선택시
// js에서는 자식을 선택 할 경우에 children() -> jQuery도 동일
// js에서 내부의 자손요소를 선택시 getElements . . .
// jQuery => find()

/*
** 요소 첨부 시
js : document.createElement(); -> ***.append() // 생성 후 삽입
jQurey : 선택자.append('요소이름') // 생성+삽입
*/