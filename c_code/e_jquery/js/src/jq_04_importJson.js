// jq_04_importJson.js

(function($){
  // 비동기처리(비동기화), js파일 위치 기준
  $.ajax({
    url : '../data/make_json.json',
    dataType:'json',
    context: document.body
  }).done(function(data){
    
    var wrap = $('#wrap');
    wrap.append('<ul class="list_insert"></ul>');
    var Insert = wrap.children('ul');
    var i = 0;
    for(;i<data.length;i+=1){
      Insert.append('<li></li>');
      Insert.children('li').eq(-1).text(data[i].name);
    }

  });

  // 동기식 - 순차적으로 처리, 직렬
  // 비동기식 - 필요할때마다 그때그때 역할 및 수행할 동작을 바꿈, 병렬

  // ========================================
  // $.ajax({url:'불러올파일'}).done(function(data){기능수행});
  //XMLHttpRequest

})(jQuery);
