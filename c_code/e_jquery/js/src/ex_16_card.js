// ex_16_card.js

(function($){

  // json형식에서는
  [
    {"title":"card title","content":"context","imgSrc":"img_card_01.jpg","imgAlt":"img caption"}
  ]

  var cardData = [];
  var k=0, l;
  var url = '../img/1223_card/'
  var imgT = 'img_card_';
  for(;k<36;k++){
    if(k<9){
      l = '0'+(k+1);
    }else if(k<99){
      l = (k+1);
    }
    cardData[k] = {};
    cardData[k].title  =  'title' + l ;
    cardData[k].imgSrc =  url + imgT + l + '.jpg';
    cardData[k].imgAlt =  imgT + l + ' img caption';

  }

  console.log(cardData);

  var win = $(window);
  var cardBox = $('#cardBox');
  cardBox.append('<ul></ul>');
  var cardUl = cardBox.children('ul');
  var liTag =   
    '<li><a href="#">\
      <div class="img_temp"><img></div><span>Title text</span>\
    </a></li>';

  var y = 0,listEl;
  for(;y<36;y++){
    cardUl.append(liTag);
    listEl = cardUl.children('li').eq(y);
    listEl.find('img').attr({'src':cardData[y].imgSrc,'alt':cardData[y].imgAlt
    });
  } // cardLi js에서 구현

    // var w = function(t){
    //   var rel = t || false;
    //   var t = 
    // }

  // ul 크기설정 - li의 width값, li의 margin, browser의 width값
  var cardLi = cardUl.children('li');

  var cardLiWidth = cardLi.eq(0).outerWidth();
  var cardLiMargin = cardLi.eq(0).outerWidth(true) - cardLiWidth; //(true) => 마진값이 포함된 가로값

  // 브라우저 크기 변경시 다시 수행(마지막 순서) - 함수처리

  var BrowserSet = function(){
    
    cardLi.removeAttr('style');// resize시 마다 마진값 제거
    var winW = win.outerWidth(); // 브라우저 가로값
    var liLen = parseInt(winW / (cardLiWidth + cardLiMargin)); // ul 안에 들어갈수있는 li갯수
    // 정수화 parseInt(버림) Math.floor / Math.round / Math.ceils
    var ulWidth = ((cardLiWidth+cardLiMargin)*liLen)-cardLiMargin; // ul길이 설정
    cardUl.css({width: ulWidth + 'px'});
    // cardLi.eq(liLen-1).css({margin:0}); // 한 행의 마지막 li margin제거
    console.log(liLen, ulWidth);

    var lin = 0;
    var liNth = Math.ceil(cardLi.length / liLen); // 생성되는 행의 수(줄)
    var nn;
    for(;lin<liNth;lin++){
      nn = (liLen*lin)-1; // 순서이므로 -1
      cardLi.eq(nn).css({marginRight:0});
    }  // 행 n개씩에서 n(eq(n*n-1))번째 마다 마진값을 제거 eq(n-n, 2n-1, 3n-1 ...
  };// BrowserSet
  BrowserSet();

  win.on('resize',function(){
    BrowserSet();
  });

})(jQuery);