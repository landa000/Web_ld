// monffee_bestNewsBox.js

(function($){

  var imgUrl = '../img/menu/';

  var newsData = [
    { title:'New menu 01',
      link:'#',
      img:'menu_01.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 02',
      link:'#',
      img:'menu_02.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 03',
      link:'#',
      img:'menu_03.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 04',
      link:'#',
      img:'menu_04.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 05',
      link:'#',
      img:'menu_05.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 06',
      link:'#',
      img:'menu_06.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'},
    { title:'New menu 07',
      link:'#',
      img:'menu_07.png',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni tempore recusandae. Lorem ipsum dolor amet'}
  ]; // ul 데이터리스트

  var bestNewsBox = $('#bestNewsBox');
  var bestH2      = bestNewsBox.children('h2');
  bestH2.after('<ul class="clearfix"></ul>');
  var bestUl      = bestNewsBox.children('ul');
  var cardListBase = '<li><a href="#"><div class="news_img"></div><dl><dt></dt><dd></dd></dl></a></li>';

  var i = 0
  var bestLi;
  for (; i<newsData.length ; i+=1){
    bestUl.append(cardListBase);
    bestLi = bestUl.find('li').eq(i);
    bestLi.find('a').attr({href:newsData[i].link});
    bestLi.find('.news_img').css({'backgroundImage':'url('+ imgUrl + newsData[i].img +')'});
    bestLi.find('dt').text(newsData[i].title);
    bestLi.find('dd').text(newsData[i].content);
  } // 데이터리스트 cardListBase내에 삽입

  var newsImg     = bestUl.children('.news_img');
  var bestDt      = bestUl.children('dt')
  var bestDd      = bestUl.children('dd')


})(jQuery);

// newsImg.css('backgroundImage':'../img/menu/menu_'+ i +'.png');