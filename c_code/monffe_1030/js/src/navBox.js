// navBox.js

(function($){
  // =============================================
  //  navigation 내용 삽입 형식 설정

var navBox = [
  {'titleNav' : 'story',
    'subNav' : ['몽피이야기','회사소개','후원']},
  {'titleNav' : 'menu',
    'subNav' : ['커피류','기타음료','음식 및 디저트','상품','선물세트','기타']},
  {'titleNav' : 'store',
    'subNav' : ['신규매장','매장찾기','가맹문의','창업설명회','창업스토리']},
  {'titleNav' : 'news',
    'subNav' : ['이벤트','공지사항','프로모션','미디어 광고']}
  ];

  // =============================================
  // #navBox 내부에 각각의 요소내용 삽입
  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';

  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, i, j;
  for(i=0; i<navLen; i+=1){
    navBoxSelUl.append(navList);
    navDt = navBoxSelUl.children('li').eq(i).find('dt');
    navDt.append('<a href="#">'+ navBox[i].titleNav+'</a>');
    subNavLen=navBox[i].subNav.length;

    for( j=0 ; j<subNavLen ;j+=1){
      navDd = navBoxSelUl.children('li').eq(i).find('dd');
      navDd.append('<a href="#">' + navBox[i].subNav[j] +'</a>');
    }
  }
  // =============================================================
  var navBoxFindDt = navBoxSel.find('dt');
  var navBoxFindDtLink = navBoxFindDt.find('a');
  var navBoxFindDd = navBoxSel.find('dd');
  var navBoxFindDdLink = navBoxFindDd.find('a');
  navBoxFindDd.hide();

  // navBoxSelUl.addEventListener('mouseenter',function(){});
  navBoxSelUl.on('mouseenter',function(){
    navBoxFindDd.stop().slideDown();
  });
  navBoxFindDtLink.on('focus', function(){
    navBoxFindDd.stop().slideDown();
  });
  navBoxSelUl.on('mouseleave',function(){
    navBoxFindDd.stop().slideUp();
  });
  navBoxFindDdLink.eq(-1).on('blur', function(){
    navBoxFindDd.stop().slideUp();
  });

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