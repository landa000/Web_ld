// ex_18_card02.js

(function($){
  // 1. card 영역 크기 설정, 내용물 삽입
  // 2. 스크롤 진행위치
  // 3. 스크롤 일정영역 도달 시 추가로 카드생성
  // 4. Math.random()을 이용하여 색상, 높이값을 변경
  // 5. 화면상의 한 행, 열에 들어갈 위치값(top, left값 설정) - left 사전제거

  // 7.

  
  // 2. 스크롤 진행위치
  var headBox = $('#headBox');
  headBox.prepend('<div class="scroll_percent"></div>');
  var scrollP = $('.scroll_percent');
  scrollP.css({
    position:'absolute',top:0,left:0,zIndex:-1,
    width:0,height:'100%',backgroundColor:'#f97'
  });

  var cardCode ='<div class="card"><div class="card_img"></div>\
  <div class="card_narr"><a href="#">\
  <dl><dt>title</dt><dd>context</dd></dl>\
  </a></div></div>'

  // 1. card 생성 , 3번항목의 중복이므로 함수화 처리
  var win = $(window);
  var cardBox = $('#cardBox');
  var cardArea = cardBox.children('.card_area');
  var card, cardWidthLen; // 카드, 카드 넓이

  // 4. Math.random()을 이용하여 색상, 높이값을 변경
  var Rn = function(){
    return Math.floor(Math.random()*16).toString(16);
  }
  var myRandomN = 9;
  var myRandomH = 40;
  var RandomHeight = function(){
    var H = parseInt(Math.random()*myRandomN)*myRandomH;
    return H
  };
  var randomColor = []; // 배열형식으로 만들어 색상을 집어넣음(순번대로 넣기위함)
  var randomH = [];
  // 4-2. 높이값 변경

  var i=0;
  var cardCount = 0; // 카드 전체값

  var AppendCardFn = function(){
    cardCount += 50;
    for(;i<cardCount;i++){
      cardArea.append(cardCode);
      card = cardArea.children('.card').eq(i);
      card.find('dt').text('title_'+(i+1));
      randomColor[i] = '#'+'00'+Rn()+Rn()+Rn()+Rn();
      randomH[i] = card.outerHeight()+RandomHeight();
      card.find('.card_img').css({backgroundColor:randomColor[i]});
      card.css({height:randomH[i]+'px'});
    }
    card = $('.card');
    // float:left 삭제자리
  }// AppendCardFn
  AppendCardFn();

// .card_area의 width값
  var cardEq0 = $('.card').eq(0);
  var cardWidth = cardEq0.outerWidth();
  var CardWidthSet = function(){
    cardWidthLen = parseInt(cardBox.outerWidth() / cardWidth);
    cardArea.css({ width: cardWidthLen * cardWidth+'px'});
    return cardWidthLen; 
  }
  CardWidthSet();

// 5. 화면상의 한 행, 열에 들어갈 위치값(top, left값 설정) - left 사전제거
// + 외부에서 변수 선언시 위에서도 사용 가능
  var topArr = [];
  var remainder;
  var CardPositionSettingFn = function(){
    var j=0;
    // 행에 들어가는 각각 n번째 요소의 위치를 배치
    for( ; j<cardCount ; j++){
    remainder = j % cardWidthLen; // 나머지값
    card.eq(j).css({left:cardWidth*remainder+'px'});

// top값 설정
    var setTop, setHeight;
    if(j<cardWidthLen){
      card.eq(j).css({top:0});
      topArr[j] = 0;
      }else{
        setTop = parseFloat(card.eq(j-cardWidthLen).css('top'));
        setHeight = card.eq(j-cardWidthLen).outerHeight();
        topArr[j] = setTop + setHeight;
        card.eq(j).css({top: setTop + setHeight + 'px'});
        // card.eq(j).css({top:})
      }//if
    }//for
    console.log(topArr);
// 7. .card_area height value
    // 카드 중 제일높은 height값
    var randomHMax = card.eq(0).outerHeight() + (myRandomN * myRandomH);
    // 배열 내 열의 최대값
    var maxH = Math.max.apply(null, topArr); // Math.max 최대값(최소값 min)
    cardArea.css({height:randomHMax+maxH});
  }// CardPositionSettingFn
  CardPositionSettingFn();

  // browser 크기 변경시 cardArea width값 재조정 
  win.on('resize',function(){
    CardWidthSet();
    CardPositionSettingFn();
  });// win.on('resize')

// 스크롤의 진행위치 표시(bar)
  win.on('scroll',function(){
    var st = $(this).scrollTop();
    var wrap = $('#wrap');
    var wrapHeight = wrap.outerHeight();
    var winH = win.outerHeight();
    var per = (st/(wrapHeight-winH)) * 100;
    // 값 / 기준(전체) * 100
    // 스크롤은 -화면높이값 추가
    scrollP.css({width:per+'%'});

// 3. 스크롤 일정영역 도달 시 추가로 카드생성
    if(per>=65){
      AppendCardFn();
      CardPositionSettingFn();
    }
  });

})(jQuery);